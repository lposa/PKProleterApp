import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

import { AntDesign } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import React from "react";
import { TabBarButton } from "@/components/TabBarButton";

export type RouteName = "index" | "treninzi" | "plivaci";

// @ts-ignore
// TODO: figure out types
export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.navbar}>
      {state.routes.map(
        (
          route: { key: string | number; name: RouteName; params: any },
          index: any,
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          if (["_sitemap", "+not-found"].includes(route.name)) return null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarButton
              isFocused={isFocused}
              onPress={onPress}
              label={label}
              routeName={route.name}
              key={route.name}
            />
          );
        },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.global.oxfordBlue,
    paddingVertical: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
