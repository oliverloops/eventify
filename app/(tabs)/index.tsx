import { StyleSheet, ScrollView, FlatList } from "react-native";
// Components
import { Text, View, SafeAreaView } from "@/components/Themed";
import HomeHeader from "@/components/molecules/HomeHeader";
import SearchBar from "@/components/molecules/SearchBar";
import CategoryPill from "@/components/atoms/CategoryPill";
import EventCard from "@/components/molecules/EventCard";

const categories = [
  { id: 0, name: "💼 Emprendimiento" },
  { id: 1, name: "🤝 Comunidad" },
  { id: 2, name: "🎸 Música" },
  { id: 3, name: "🎨 Arte" },
  { id: 4, name: "🎭 Teatro" },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <SearchBar />
        <View style={styles.contentBody}>
          <Text style={styles.subTitle}>Categorías</Text>
          <ScrollView style={styles.carousel} horizontal>
            {categories.map((category) => (
              <CategoryPill key={category.id} title={category.name} />
            ))}
          </ScrollView>
          <View style={styles.eventSection}>
            <EventCard />
            <EventCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2.5%",
  },
  contentBody: {
    marginVertical: 10,
    paddingHorizontal: "2%",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  carousel: {
    marginVertical: 10,
  },
  eventSection: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
