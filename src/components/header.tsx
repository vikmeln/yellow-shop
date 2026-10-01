import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable>
          <Ionicons name="menu-outline" size={32} color="white" />
        </Pressable>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>yellow</Text>
          <Text style={styles.subtitle}>все для технотебе</Text>
        </View>
        <View style={styles.rightIcons}>
          <Pressable>
            <MaterialCommunityIcons
              name="scale-balance"
              size={24}
              color="white"
            />
          </Pressable>
          <Pressable>
            <Ionicons name="bag-outline" size={26} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#191919",
    zIndex: 100,
    elevation: 100,
  },
  container: {
    height: 70,
    backgroundColor: "#191919",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    top: 35,
    left: 0,
    right: 0,
  },

  logoContainer: {
    alignItems: "center",
  },

  logo: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "300",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#ffffff",
    fontSize: 7,
    marginTop: -5,
  },

  rightIcons: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
});
