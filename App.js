import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import BelajarTextInput from "./components/BelajarTextInput";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BelajarFlatList from "./components/BelajarFlatList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Component01,
  Component02,
  Component03,
  Component04,
} from "./components/all";
import { registerRootComponent } from "expo";
import { WidgetNavigationDrawer } from "./src/lib/widgets";
import { Image, Text, View } from "react-native";
import TugasPertama from "./components/TugasPertamaRN";
import TugasKedua from "./components/TugasKeduaRN";
import TugasKetiga from "./components/TugasKetigaRN";
import TugasKeempat from "./components/TugasKeempatRN";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#4a0000",
            drawerItemStyle: { marginVertical: 5 },
            headerShown: false,
          }}
          drawerContent={(props) => <WidgetNavigationDrawer {...props} />}
        >
          <Drawer.Screen
            name="TugasPertama"
            options={{
              drawerLabel: (props) => (
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <Image
                    source={{
                      uri: "https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/32/Cloud-icon.png",
                    }}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: props.color }}>Tugas 01</Text>
                </View>
              ),
              title: "First",
            }}
            component={TugasPertama}
          />
          <Drawer.Screen
            name="TugasKedua"
            options={{
              drawerLabel: (props) => (
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <Image
                    source={{
                      uri: "https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/32/Bolt-icon.png",
                    }}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: props.color }}>Tugas 02</Text>
                </View>
              ),
              title: "Second",
            }}
            component={TugasKedua}
          />
          <Drawer.Screen
            name="TugasKetiga"
            options={{
              drawerLabel: (props) => (
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <Image
                    source={{
                      uri: "https://icons.iconarchive.com/icons/bokehlicia/captiva/256/music-icon.png",
                    }}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: props.color }}>Tugas 03</Text>
                </View>
              ),
              title: "Third",
            }}
            component={TugasKetiga}
          />
          <Drawer.Screen
            name="TugasKeempat"
            options={{
              drawerLabel: (props) => (
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <Image
                    source={{
                      uri: "https://icons.iconarchive.com/icons/bokehlicia/captiva/256/preferences-desktop-accessibility-icon.png",
                    }}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: props.color }}>Tugas 04</Text>
                </View>
              ),
              title: "Four",
            }}
            component={TugasKeempat}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar
        hidden={true}
        style="light"
        backgroundColor="#3a0ca3"
        translucent={false}
      />
    </>
  );
}

registerRootComponent(App);
