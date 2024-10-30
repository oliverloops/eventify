import { StyleSheet, Pressable } from "react-native";
// Components
import { Text } from "@/components/Themed";

interface CategoryPillProps {
  title: string;
}

export default function CategoryPill({ title }: CategoryPillProps) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 32,
    backgroundColor: "#272B43",
    borderRadius: 50,
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
