import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "react-native-vector-icons";

function IconButton({ icon, onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
