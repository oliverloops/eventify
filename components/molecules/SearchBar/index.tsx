import { TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Components
import { View } from "@/components/Themed";

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={22} color="white" />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={"#767676"}
        multiline={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#272B43",
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: "2%",
  },
  textInput: {
    color: "white",
    marginLeft: 10,
  },
});
