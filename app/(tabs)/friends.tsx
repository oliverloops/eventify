import { StyleSheet } from "react-native";
// Components
import { Text, View } from "@/components/Themed";

export default function Friends() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
