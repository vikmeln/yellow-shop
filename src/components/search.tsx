import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color="#777" />
      <TextInput
        style={styles.input}
        placeholder="Пошук товару..."
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 30,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});
