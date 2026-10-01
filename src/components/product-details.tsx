import { View, Text, StyleSheet } from "react-native";

export default function ProductDetails({ product }: any) {
  const data = [
    ["Назва", product.name],
    ["Гарантійний термін", "3 місяця"],
    ["Серія", product.series],
    ["Вбудована пам'ять", product.memory],
    ["Оперативна пам'ять", product.ram],
    ["Операційна система", "iOS 26"],
    ["Процесор", product.processor],
    ["SIM", product.sim],
    ["Колір", product.color],
    ["Виробник", "Apple"],
    ["Камера", "48 + 48 + 48 Мп"],
    ["Дисплей", "6.3 OLED 120 Гц"],
  ];

  return (
    <View style={styles.box}>
      <View style={styles.tabs}>
        <Text style={styles.active}>Характеристики</Text>
        <Text>Відгуки</Text>
        <Text>Статті</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.name}>{item[0]}</Text>
          <View style={styles.line} />
          <Text style={styles.value}>{item[1]}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    gap: 25,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 15,
  },

  active: {
    fontWeight: "700",
    borderBottomWidth: 2,
    borderColor: "#ffd000",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  name: {
    color: "#777",
    width: 120,
  },

  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
  },

  value: {
    width: 150,
    textAlign: "right",
    color: "#222",
  },
});
