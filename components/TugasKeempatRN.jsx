import { useState } from "react";
import { Button, FlatList } from "react-native";
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

const TugasKeempat = ({ navigation }) => {
  const [user, setUser] = useState({
    task: "",
  });
  let kumpulanInputTask = [];
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Math.random(),
        text: taskInput.trim(),
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Hapus tugas dengan ID tertentu
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabelTitle}>Tugas 04</Text>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Task</Text>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <TextInput
                style={styles.formControl}
                value={taskInput}
                onChangeText={setTaskInput}
                placeholder="Tambah tugas baru..."
              />

              <TouchableOpacity
                onPress={addTask}
                style={{
                  backgroundColor: "#ff597b",
                  paddingHorizontal: 14,
                  paddingVertical: 16,
                  borderRadius: 4,
                  borderColor: "#5e90ee",
                  borderWidth: 1,
                }}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formGroupInput}>
              <FlatList
                data={tasks}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 10,
                      fontSize: 20,
                      paddingVertical: 12,
                      paddingHorizontal: 8,
                      color: "#0d1b2a",
                      backgroundColor: "#fff",
                      borderWidth: 0.3,
                      borderRadius: 4,
                    }}
                  >
                    <Text styles={{ width: "80%", justifyContent: "center" }}>
                      {item.text}
                    </Text>
                    <Button
                      style={styles.button}
                      title="Hapus"
                      onPress={() => deleteTask(item.id)}
                    />
                  </View>
                )}
              />
            </View>
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
    paddingHorizontal: 14,
    paddingVertical: 6,
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
  formGroupInput: {
    justifyContent: "space-between",
    gap: 2,
    flexDirection: "row",
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
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    backgroundColor: "#fff",
    borderWidth: 0.3,
    borderRadius: 4,
    width: "60%",
    marginBottom: 10,
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

export default TugasKeempat;
