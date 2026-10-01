import { View, Text, StyleSheet, Image } from "react-native";
import bankp from "@/assets/images/ПриватБанк.png";
import banka from "@/assets/images/Альфа Банк.png";

export default function PaymentInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.bankRow}>
        <View style={styles.bank}>
          <Image source={bankp} style={styles.bankLogo} />
          <Text style={styles.bankName}>ПриватБанк</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
        <View style={styles.bank}>
          <Image source={banka} style={styles.bankLogo} />
          <Text style={styles.bankName}>Альфа Банк</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.item}>
            <Text style={styles.bold}>Сума, грн.:</Text>
            {"  "}500 - 100 000
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Пільгот. період:</Text>
            {"  "}5, 10, 12, 24
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Термін:</Text>
            {"  "}до 36
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Вік:</Text>
            {"  "}21 - 70
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Внесок:</Text>
            {"  "}10%
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.item}>
            <Text style={styles.bold}>Сума, грн.:</Text>
            {"  "}500 - 100 000
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Пільгот. період:</Text>
            {"  "}4, 5, 7, 10,12,18,24
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Строк:</Text>
            {"  "}до 36
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Вік:</Text>
            {"  "}21 - 70
          </Text>
          <Text style={styles.item}>
            <Text style={styles.bold}>Внесок:</Text>
            {"  "}0%
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  bankRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  bank: {
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  bankLogo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  bankName: {
    fontWeight: "600",
    color: "#444",
  },

  arrow: {
    color: "#bbb",
    fontSize: 25,
  },

  line: {
    height: 1,
    backgroundColor: "#bbb",
    marginTop: 20,
  },

  columns: {
    flexDirection: "row",
  },

  column: {
    flex: 1,
    padding: 10,
  },

  item: {
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 12,
    color: "#333",
  },

  bold: {
    fontWeight: "700",
    color: "#111",
  },
});
