import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import products from "../../data/products.json";
import Header from "@/components/header";
import ProductDetails from "@/components/product-details";
import Footer from "@/components/footer";

const getImage = (image: string) => {
  switch (image) {
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

export default function ProductPage() {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <Text>Товар не найден</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="#333" />
      </Pressable>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.breadcrumb}>
            Главная › Apple › iPhone › iPhone 17
          </Text>
          <Image source={getImage(product.image)} style={styles.image} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>{product.price} грн</Text>
          <Pressable style={styles.button}>
            <Text>Купить</Text>
          </Pressable>
          <ProductDetails product={product} />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  back: {
    position: "absolute",
    top: 120,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  content: {
    paddingHorizontal: 20,
  },

  breadcrumb: {
    color: "#999",
    fontSize: 12,
    marginTop: 15,
  },

  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    color: "#111",
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    color: "#333",
  },

  price: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 15,
    color: "#111",
  },

  button: {
    height: 50,
    backgroundColor: "#ffd000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
