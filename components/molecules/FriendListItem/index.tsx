import { StyleSheet, Image } from "react-native";
// Components
import { Text, View } from "@/components/Themed";

export default function FriendListItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/avatar_one.png")}
      />
      <View style={styles.content}>
        <Text style={{ fontWeight: 500 }}>Jane Lane</Text>
        <View style={styles.userMetadata}>
          <Text style={styles.textMetadata}>DCEA</Text>
          <Text style={[styles.textMetadata, { marginLeft: 5 }]}>
            @username
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
  },
  userMetadata: {
    flexDirection: "row",
  },
  textMetadata: {
    fontSize: 12,
    color: "#ADADAD",
  },
});
