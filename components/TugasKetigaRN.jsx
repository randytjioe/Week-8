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
export const CURRENCY = "IDR";

export const LOCALE = "id-ID";

export const TIME_ZONE = "Asia/Jakarta";

const TugasKetiga = ({ navigation }) => {
  const [user, setUser] = useState({
    namaBarang: "",
    harga: 0,
    quantity: 0,
  });
  const [hasil, setHasil] = useState(0);
  const formatCurrency = (data) => {
    if (!data) {
      data = 0;
    }
    return new Intl.NumberFormat(LOCALE, {
      style: "currency",
      currency: CURRENCY,
    }).format(data);
  };
  const onHitung = () => {
    setHasil(parseInt(user.harga) * parseInt(user.quantity));
  };

  const onReset = () => {
    setHasil(0);
    setUser({
      namaBarang: "",
      harga: 0,
      quantity: 0,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabelTitle}>Tugas 03</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Nama Barang</Text>
            <TextInput
              style={styles.formControl}
              value={user.namaBarang}
              onChangeText={(text) =>
                setUser((value) => ({ ...value, namaBarang: text }))
              }
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Harga</Text>
            <TextInput
              style={styles.formControl}
              value={user.harga}
              onChangeText={(number) =>
                setUser((value) => ({ ...value, harga: number }))
              }
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Quantity</Text>
            <TextInput
              style={styles.formControl}
              value={user.quantity}
              onChangeText={(number) =>
                setUser((value) => ({ ...value, quantity: number }))
              }
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>
              Jumlah yang harus dibayar = {formatCurrency(hasil)}
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onHitung} style={styles.button}>
              <Text style={styles.buttonText}>Hitung</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={onReset} style={styles.button}>
              <Text style={styles.buttonText}>Reset</Text>
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

export default TugasKetiga;
