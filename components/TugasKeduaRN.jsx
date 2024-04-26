import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TugasKedua = ({ navigation }) => {
  const [user, setUser] = useState({
    angkaPertama: 0,
    angkaKedua: 0,
  });
  const [hasil, setHasil] = useState(0);

  const onPenjumlahan = () => {
    setHasil(parseInt(user.angkaPertama) + parseInt(user.angkaKedua));
  };

  const onKurang = () => {
    setHasil(user.angkaPertama - user.angkaKedua);
  };

  const onKali = () => {
    setHasil(user.angkaPertama * user.angkaKedua);
  };

  const onBagi = () => {
    setHasil(user.angkaPertama / user.angkaKedua);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabelTitle}>Tugas 02</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Angla Pertama</Text>
            <TextInput
              style={styles.formControl}
              value={user.angkaPertama.toString()}
              onChangeText={(number) => {
                let num = number.replace(/\D/g, "");
                num = Number(num);
                setUser((value) => ({ ...value, angkaPertama: num }));
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Angka Kedua</Text>
            <TextInput
              style={styles.formControl}
              value={user.angkaKedua.toString()}
              onChangeText={(number) => {
                let num = number.replace(/\D/g, "");
                num = Number(num);
                setUser((value) => ({ ...value, angkaKedua: num }));
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Hasil Perhitungan = {hasil}</Text>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onPenjumlahan} style={styles.button}>
              <Text style={styles.buttonText}>Penjumlahan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onKurang} style={styles.button}>
              <Text style={styles.buttonText}>Pengurangan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onBagi} style={styles.button}>
              <Text style={styles.buttonText}>Pembagian</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onKali} style={styles.button}>
              <Text style={styles.buttonText}>Perkalian</Text>
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

export default TugasKedua;
