import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Filters } from "../types/filter";
import Slider from "@react-native-community/slider";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function Filter({ filters, setFilters }: Props) {
  const [open, setOpen] = useState(false);
  const options = [
    {
      title: "СЕРІЯ",
      key: "series",
      values: ["iPhone 17 Pro"],
    },

    {
      title: "ВБУДОВАНА ПАМ'ЯТЬ",
      key: "memory",
      values: ["256 GB", "512 GB", "1 TB"],
    },

    {
      title: "КОЛІР",
      key: "color",
      values: ["Silver", "Deep Blue", "Cosmic Orange"],
    },

    {
      title: "КІЛЬКІСТЬ SIM",
      key: "sim",
      values: ["SIM", "eSIM"],
    },

    {
      title: "ОПЕРАТИВНА ПАМ'ЯТЬ",
      key: "ram",
      values: ["12 GB"],
    },
  ];

  function selectFilter(key: keyof Filters, value: string) {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setOpen(!open)}>
        <Text style={styles.buttonText}>Фільтри</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#635bff"
        />
      </Pressable>
      {open && (
        <View style={styles.panel}>
          <Text style={styles.title}>ЦІНА</Text>
          <Slider
            style={{ width: "100%" }}
            minimumValue={56699}
            maximumValue={81899}
            step={100}
            value={filters.minPrice}
            minimumTrackTintColor="#ffd000"
            maximumTrackTintColor="#ddd"
            thumbTintColor="#ffd000"
            onValueChange={(value) => {
              setFilters((prev) => ({
                ...prev,
                minPrice: Math.round(value),
              }));
            }}
          />
          <Text style={styles.priceText}>
            {filters.minPrice} грн - {filters.maxPrice} грн
          </Text>
          {options.map((item) => (
            <View key={item.key}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.values}>
                {item.values.map((value) => (
                  <Pressable
                    key={value}
                    style={[
                      styles.value,
                      filters[item.key as keyof Filters] === value &&
                        styles.active,
                    ]}
                    onPress={() =>
                      selectFilter(item.key as keyof Filters, value)
                    }
                  >
                    <Text
                      style={
                        filters[item.key as keyof Filters] === value
                          ? styles.activeText
                          : styles.valueText
                      }
                    >
                      {value}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "#d8cfff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    borderRadius: 5,
  },

  buttonText: {
    color: "#635bff",
    fontSize: 16,
    fontWeight: "600",
  },

  priceText: {
    color: "#777",
    marginTop: 5,
    fontSize: 13,
  },

  panel: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
  },

  title: {
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 15,
  },

  values: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  value: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 15,
  },

  active: {
    backgroundColor: "#635bff",
    borderColor: "#635bff",
  },

  valueText: {
    color: "#555",
  },

  activeText: {
    color: "#fff",
  },
});
