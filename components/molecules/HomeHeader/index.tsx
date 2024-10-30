import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// Components
import { Text, View } from "@/components/Themed";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.textContent}>
        <Text style={styles.title}>Eventify!</Text>
        <Text style={styles.subTitle}>Hola Fulanito 👋</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => null}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
  },
  textContent: {
    flexDirection: "column",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginTop: 5,
  },
  btnContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272B43",
  },
});
