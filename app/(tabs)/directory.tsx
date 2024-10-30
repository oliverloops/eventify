import { StyleSheet } from "react-native";
// Components
import { Text, View, SafeAreaView } from "@/components/Themed";
import SearchBar from "@/components/molecules/SearchBar";
import FriendListItem from "@/components/molecules/FriendListItem";

export default function Friends() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Directorio</Text>
      </View>
      <SearchBar placeholder="Buscar por nombre" />
      <View style={{ marginVertical: 10, padding: "2.5%" }}>
        <FriendListItem isFriend={false} />
        <FriendListItem isFriend={true} />
        <FriendListItem isFriend={false} />
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
