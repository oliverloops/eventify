import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function Directory() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Directory</Text>
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
