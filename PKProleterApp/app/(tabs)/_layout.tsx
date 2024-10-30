import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { TabBar } from "@/components/TabBar";

export default function TabLayout(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Vesti",
        }}
      />
      <Tabs.Screen
        name="treninzi"
        options={{
          title: "Treninzi",
        }}
      />
      <Tabs.Screen
        name="plivaci"
        options={{
          title: "Plivaci",
        }}
      />
    </Tabs>
  );
}
