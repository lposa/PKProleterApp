import Ionicons from "@expo/vector-icons/Ionicons";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export const Collapsible = ({
  children,
  title,
}: PropsWithChildren & { title: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => {
          setIsOpen((value) => !value);
        }}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  content: {
    marginLeft: 24,
    marginTop: 6,
  },
  heading: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
});