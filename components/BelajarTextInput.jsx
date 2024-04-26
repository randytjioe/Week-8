import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BelajarTextInput = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSignIn = () => {
    fetch("http://192.168.1.2:3000/user/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        navigation.navigate("BelajarFlatList", { token: json.token });
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logoThumb}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://icons.iconarchive.com/icons/chrisl21/minecraft/512/Creeper-icon.png",
            }}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            value={user.email}
            onChangeText={(text) =>
              setUser((value) => ({ ...value, email: text }))
            }
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formControl}
            secureTextEntry={true}
            value={user.password}
            onChangeText={(text) =>
              setUser((value) => ({ ...value, password: text }))
            }
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={onSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 58,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{ borderBottomWidth: 1, flex: 1, borderColor: "#5e90ee" }}
            ></View>
            <Text style={styles.formLabel}>or</Text>
            <View
              style={{ borderBottomWidth: 1, flex: 1, borderColor: "#5e90ee" }}
            ></View>
          </View>
          <TouchableOpacity onPress={onSignIn} style={styles.secondButton}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#644a3c",
  },
  wrapper: {
    justifyContent: "center",
    height: "100%",
    gap: 24,
  },
  button: {
    backgroundColor: "#98c355",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 4,
    borderColor: "#5e90ee",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#644a3c",
    fontSize: 24,
    fontWeight: "800",
  },

  buttonGroup: {
    gap: 8,
  },
  secondButton: {
    backgroundColor: "#5e90ee",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 4,
    borderColor: "#98c355",
    borderWidth: 1,
  },
  formGroup: {
    marginHorizontal: 58,
    gap: 8,
  },
  formLabel: {
    fontSize: 20,
    color: "#fff",
  },
  formControl: {
    backgroundColor: "#ffe5ec",
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    borderColor: "#fb6f92",
    borderWidth: 0.3,
    borderRadius: 4,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoThumb: {
    justifyContent: "center",
    gap: 16,
    flexDirection: "row",
  },
});

export default BelajarTextInput;
