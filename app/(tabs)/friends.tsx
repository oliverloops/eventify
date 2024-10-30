import { StyleSheet } from "react-native";
// Components
import { Text, View, SafeAreaView } from "@/components/Themed";

export default function Friends() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Amigos</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2.5%",
  },
  header: {
    flexDirection: "row",
    marginTop: 50,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
  },
});
