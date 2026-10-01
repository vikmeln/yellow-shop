import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  showTop: boolean;
  onTop: () => void;
}

export default function FloatingButtons({ showTop, onTop }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.chat}>
        <Ionicons name="chatbubble-ellipses" size={28} color="white" />
      </Pressable>
      {showTop && (
        <Pressable style={styles.top} onPress={onTop}>
          <Ionicons name="chevron-up" size={28} color="black" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 15,
    bottom: 25,
    alignItems: "center",
    gap: 15,
  },

  chat: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2455c3",
    alignItems: "center",
    justifyContent: "center",
  },

  top: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#ffd000",
    alignItems: "center",
    justifyContent: "center",
  },
});
