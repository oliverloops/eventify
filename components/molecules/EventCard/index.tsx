import { Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// Components
import { Text, View } from "@/components/Themed";

export default function EventCard() {
  return (
    <Pressable style={styles.imgContainer} onPress={() => null}>
      <Image
        style={styles.image}
        source={require("@/assets/images/emprendimiento.jpg")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Título del evento</Text>
        <View style={styles.subContent}>
          <Text style={styles.place}>A-302</Text>
          <Text style={styles.date}>12 de Noviembre, 15:00 hrs.</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginVertical: 10,
  },
  image: {
    width: 360,
    height: 160,
    opacity: 0.6,
    borderRadius: 16,
  },
  content: {
    top: 100,
    left: 20,
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "transparent",
  },
  subContent: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginVertical: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  place: {
    fontSize: 14,
    color: "#676DE4",
  },
  date: {
    fontSize: 14,
    color: "#ADADAD",
    marginLeft: 10,
  },
});
