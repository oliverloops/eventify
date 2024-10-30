import { StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
// Components
import { Text, View } from "@/components/Themed";

interface FriendListItemProps {
  avatar?: string;
  isFriend: boolean;
}

export default function FriendListItem({
  avatar,
  isFriend,
}: FriendListItemProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
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
      <TouchableOpacity
        style={!isFriend ? styles.btnActive : styles.btnInactive}
        onPress={() => null}
      >
        {!isFriend ? (
          <AntDesign name="adduser" size={20} color="white" />
        ) : (
          <AntDesign name="checkcircleo" size={20} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  userMetadata: {
    flexDirection: "row",
  },
  textMetadata: {
    fontSize: 12,
    color: "#ADADAD",
  },
  btnActive: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#414AEC",
    justifyContent: "center",
    alignItems: "center",
  },
  btnInactive: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#272B43",
    justifyContent: "center",
    alignItems: "center",
  },
});
