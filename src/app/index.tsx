import { View, ScrollView } from "react-native";
import { useRef, useState } from "react";
import Header from "@/components/header";
import Search from "@/components/search";
import products from "../data/products.json";
import ProductGrid from "@/components/product-grid";
import CatalogHeader from "../components/catalog-header";
import Filter from "../components/filter";
import Sort from "../components/sort";
import FloatingButtons from "../components/floating-buttons";
import Footer from "../components/footer";
import CatalogDescription from "../components/catalog-description";
import PaymentInfo from "../components/payment-info";
import { Filters } from "../types/filter";

export default function Index() {
  const [search, setSearch] = useState("");
  const scrollRef = useRef<ScrollView>(null);
  const [showTop, setShowTop] = useState(false);
  const [sort, setSort] = useState("Новинки");
  const [filters, setFilters] = useState<Filters>({
    minPrice: 56699,
    maxPrice: 81899,
    series: null,
    memory: null,
    color: null,
    sim: null,
    ram: null,
  });

  let filteredProducts = [...products];

  if (filters.minPrice || filters.maxPrice) {
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.price >= filters.minPrice && item.price <= filters.maxPrice,
    );
  }

  if (filters.series) {
    filteredProducts = filteredProducts.filter(
      (item) => item.series === filters.series,
    );
  }

  if (filters.memory) {
    filteredProducts = filteredProducts.filter(
      (item) => item.memory === filters.memory,
    );
  }

  if (filters.color) {
    filteredProducts = filteredProducts.filter(
      (item) => item.color === filters.color,
    );
  }

  if (filters.sim) {
    filteredProducts = filteredProducts.filter(
      (item) => item.sim === filters.sim,
    );
  }

  if (filters.ram) {
    filteredProducts = filteredProducts.filter(
      (item) => item.ram === filters.ram,
    );
  }

  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  let finalProducts = [...filteredProducts];

  if (sort === "Менша ціна") {
    finalProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "Більша ціна") {
    finalProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "Новинки") {
    finalProducts.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        ref={scrollRef}
        onScroll={(event) => {
          const y = event.nativeEvent.contentOffset.y;

          setShowTop(y > 300);
        }}
        scrollEventThrottle={16}
      >
        <Search search={search} setSearch={setSearch} />
        <CatalogHeader />
        <Filter filters={filters} setFilters={setFilters} />
        <Sort sort={sort} setSort={setSort} />
        <ProductGrid products={finalProducts} />
        <PaymentInfo />
        <CatalogDescription />
        <Footer />
      </ScrollView>

      <FloatingButtons
        showTop={showTop}
        onTop={() => {
          scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
          });
        }}
      />
    </View>
  );
}
