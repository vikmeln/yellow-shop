import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CatalogHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.breadcrumbs}>
        Головна › Apple › iPhone › iPhone 17
      </Text>
      <Text style={styles.title}>Apple iPhone 17 Pro</Text>
      <Pressable style={styles.viewButton}>
        <Text style={styles.buttonText}>Перегляд товарів по:</Text>
      </Pressable>
      <View style={styles.filterRow}>
        <Text style={styles.close}>⊗</Text>
        <Text style={styles.filterText}>Серія: iPhone 17 Pro</Text>
      </View>
      <Pressable>
        <Text style={styles.clear}>ОЧИСТИТИ ВСЕ</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  breadcrumbs: {
    fontSize: 14,
    color: "#999",
  },

  title: {
    fontSize: 28,
    fontWeight: "300",
    marginTop: 10,
    color: "#222",
  },

  viewButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#d9cfff",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: "flex-start",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6b5cff",
  },

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    gap: 10,
  },

  close: {
    fontSize: 22,
    color: "#635bff",
  },

  filterText: {
    fontSize: 16,
    color: "#444",
  },

  clear: {
    marginTop: 25,
    fontSize: 14,
    color: "#635bff",
  },
});
