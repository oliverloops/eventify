import { StyleSheet } from "react-native";
// Components
import { Text, View } from "@/components/Themed";
import FriendsCircles from "@/components/atoms/FriendsCircles";

export default function FriendsEvent() {
  return (
    <View style={styles.container}>
      <View style={styles.dateSquare}>
        <Text>Nov</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>12</Text>
      </View>
      <View style={styles.eventContent}>
        <View style={styles.eventDetails}>
          <Text style={styles.title}>💼 ¿Cómo administrar un negocio?</Text>
          <Text style={styles.date}>Mier. 15:00 hrs</Text>
        </View>
        <View style={styles.friendSection}>
          <FriendsCircles />
          <Text style={styles.friendsDetails}>a 3 amigos les interesa</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: 82,
    backgroundColor: "#272B43",
    borderRadius: 20,
    marginVertical: 10,
  },
  dateSquare: {
    width: 55,
    height: 55,
    backgroundColor: "#444969",
    borderRadius: 12,
    opacity: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  eventContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  eventDetails: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginLeft: 8,
    marginRight: 5,
  },
  title: {
    fontWeight: 500,
  },
  date: {
    color: "#8A8A8A",
  },
  friendSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  friendsDetails: {
    fontSize: 8,
  },
});
