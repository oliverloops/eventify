import { StyleSheet, Image } from "react-native";
// Components
import { View } from "@/components/Themed";

export default function FriendsCircles() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/avatar_one.png")}
      />
      <Image
        style={[styles.image, { transform: [{ translateX: -8 }] }]}
        source={require("@/assets/images/avatar_two.png")}
      />
      <Image
        style={[styles.image, { transform: [{ translateX: -16 }] }]}
        source={require("@/assets/images/avatar_three.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 5,
  },
  image: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#494D9D",
  },
});
