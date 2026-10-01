import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>yellow</Text>
      <Text style={styles.phone}>(093) 811 28 44</Text>
      <View style={styles.social}>
        <Pressable>
          <Ionicons name="logo-facebook" size={18} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="logo-youtube" size={18} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="logo-instagram" size={18} color="white" />
        </Pressable>
        <Pressable>
          <Ionicons name="logo-tiktok" size={18} color="white" />
        </Pressable>
      </View>
      <View style={styles.line} />
      <Text style={styles.title}>Покупцеві</Text>
      <Text style={styles.link}>Мапа сайта</Text>
      <Text style={styles.link}>Угода користувача</Text>
      <Text style={styles.link}>Гарантія та Повернення товару</Text>
      <Text style={styles.link}>Доставка і Оплата</Text>
      <View style={styles.line} />
      <Text style={styles.title}>Чекаємо Вас</Text>
      <Text style={styles.city}>м. Дніпро</Text>
      <Text style={styles.address}>
        пр. Науки, 27, ТРЦ DELMAR MALL, 2й рівень
      </Text>
      <Text style={styles.city}>м. Київ</Text>
      <Text style={styles.address}>вул. В'ячеслава Чорновола, 41</Text>
      <View style={styles.line} />
      <Text style={styles.copy}>© Yellow 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#191919",
    paddingTop: 35,
    paddingBottom: 35,
    alignItems: "center",
    paddingHorizontal: 25,
  },

  logo: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "300",
    letterSpacing: 1,
  },

  phone: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 25,
  },

  social: {
    flexDirection: "row",
    gap: 25,
    marginTop: 45,
  },

  line: {
    height: 1,
    backgroundColor: "#333",
    width: "100%",
    marginVertical: 30,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  link: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 8,
  },

  city: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 15,
  },

  address: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },

  copy: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 5,
  },
});
