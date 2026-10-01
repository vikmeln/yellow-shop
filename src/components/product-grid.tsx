import { View, StyleSheet, useWindowDimensions } from "react-native";
import ProductCard from "./product-card";
import { Product } from "../types/product";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const { width } = useWindowDimensions();
  const columns = width < 600 ? 2 : width < 900 ? 3 : 4;

  return (
    <View style={styles.container}>
      {products.map((item) => (
        <View
          key={item.id}
          style={[
            styles.item,
            {
              width: `${100 / columns}%`,
            },
          ]}
        >
          <ProductCard product={item} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 30,
  },

  item: {
    paddingHorizontal: 5,
    marginBottom: 12,
  },
});
