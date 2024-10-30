import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export const WorldNewsBubble = () => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadow]}>
      <Image
        source={require("@/assets/images/swimming.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <ThemedText style={styles.text} numberOfLines={2}>
          Swimming: Benefits, Calories Burned, Muscles Worked
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    marginLeft: 40,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "space-between",
    backgroundColor: Colors.global.white,
  },
  image: {
    width: "100%",
    height: 160,
  },
  text: {
    color: Colors.global.polynesianBlue,
    padding: 5,
  },

  textContainer: {
    width: "100%",
    height: "100%",
  },

  shadow: {
    shadowColor: Colors.global.polynesianBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 20,
  },
});
