import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Product } from "@/types/product";
import { useRouter } from "expo-router";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const getImage = () => {
    switch (product.image) {
      case "Apple iPhone 17 Pro (Silver).png":
        return require("@/assets/images/Apple iPhone 17 Pro (Silver).png");

      case "Apple iPhone 17 Pro (Deep Blue).png":
        return require("@/assets/images/Apple iPhone 17 Pro (Deep Blue).png");

      case "Apple iPhone 17 Pro (Cosmic Orange).png":
        return require("@/assets/images/Apple iPhone 17 Pro (Cosmic Orange).png");

      default:
        return null;
    }
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/product/${product.id}`)}
    >
      <View style={styles.icons}>
        <MaterialCommunityIcons name="scale-balance" size={17} color="#777" />
        <Ionicons name="chatbox-outline" size={17} color="#777" />
      </View>
      {product.isPopular && (
        <View style={styles.popular}>
          <Text style={styles.popularText}>POPULAR</Text>
        </View>
      )}
      <Image source={getImage()} style={styles.image} />
      <Text style={styles.name} numberOfLines={3}>
        {product.name}
      </Text>
      <Text style={styles.price}>
        {product.price.toLocaleString("uk-UA")} грн
      </Text>
      <View style={styles.actions}>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyText}>Купити</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.credit}>В кредит</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.available}>
          {product.available ? "Є в наявності" : "Немає в наявності"}
        </Text>
        <Text style={styles.code}>код: {product.code}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    position: "relative",
  },

  icons: {
    position: "absolute",
    left: 10,
    top: 16,
    gap: 10,
    zIndex: 2,
  },

  image: {
    width: "100%",
    height: 125,
    resizeMode: "contain",
    marginTop: 5,
  },

  name: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 18,
    color: "#111",
    minHeight: 42,
  },

  price: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  buyButton: {
    backgroundColor: "#ffd000",
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 20,
  },

  buyText: {
    fontSize: 14,
    fontWeight: "500",
  },

  credit: {
    fontSize: 12,
    color: "#222",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
  },

  available: {
    fontSize: 10,
    color: "#4caf50",
  },

  code: {
    fontSize: 10,
    color: "#c0c0c0",
  },

  popular: {
    position: "absolute",
    top: 3,
    right: 8,
    backgroundColor: "#dff5ff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    zIndex: 3,
  },

  popularText: {
    fontSize: 9,
    color: "#49b5d8",
  },
});
