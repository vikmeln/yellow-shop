import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  sort: string;
  setSort: (value: string) => void;
}

export default function Sort({ sort, setSort }: Props) {
  const [open, setOpen] = useState(false);
  const options = ["Новинки", "Менша ціна", "Більша ціна"];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>сортування:</Text>
      <View>
        <Pressable style={styles.select} onPress={() => setOpen(!open)}>
          <Text>{sort}</Text>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={16}
            color="#eabf00"
          />
        </Pressable>
        {open && (
          <View style={styles.dropdown}>
            {options.map((item) => (
              <Pressable
                key={item}
                style={[styles.option, sort === item && styles.active]}
                onPress={() => {
                  setSort(item);
                  setOpen(false);
                }}
              >
                <Text style={sort === item ? styles.activeText : styles.text}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  label: {
    color: "#555",
  },

  select: {
    width: 200,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },

  dropdown: {
    position: "absolute",
    top: 48,
    width: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    zIndex: 10,
  },

  option: {
    padding: 10,
    paddingHorizontal: 20,
  },

  active: {
    backgroundColor: "#2463d4",
  },

  text: {
    color: "#555",
  },

  activeText: {
    color: "#fff",
  },
});
