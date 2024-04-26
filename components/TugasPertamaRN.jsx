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
import { ScrollView } from "react-native";

const TugasPertama = ({ navigation }) => {
  const [user, setUser] = useState({
    nama: "",
    jenisKelamin: "",
    batch: "",
  });

  const onPressTampil = () => {
    Alert.alert(JSON.stringify(user));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabelTitle}>Tugas 01</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Nama</Text>
            <TextInput
              style={styles.formControl}
              value={user.nama}
              onChangeText={(text) =>
                setUser((value) => ({ ...value, nama: text }))
              }
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Jenis Kelamin</Text>
            <TextInput
              style={styles.formControl}
              value={user.jenisKelamin}
              onChangeText={(text) =>
                setUser((value) => ({ ...value, jenisKelamin: text }))
              }
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Program Batch</Text>
            <TextInput
              style={styles.formControl}
              value={user.batch}
              onChangeText={(text) =>
                setUser((value) => ({ ...value, batch: text }))
              }
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onPressTampil} style={styles.button}>
              <Text style={styles.buttonText}>Tampilkan Pesan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f5f2",
    marginTop: 50,
  },
  wrapper: {
    justifyContent: "center",
    height: "100%",
    gap: 24,
  },
  button: {
    backgroundColor: "#ff597b",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 4,
    borderColor: "#5e90ee",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
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
    color: "#3d3b40",
  },
  formLabelTitle: {
    fontSize: 30,

    color: "#3d3b40",
  },
  formControl: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    backgroundColor: "#fff",
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

export default TugasPertama;
