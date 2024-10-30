import { Colors } from "@/constants/Colors";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { RouteName } from "@/components/TabBar";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface ITabBarButtonProps {
  isFocused: boolean;
  onPress: () => void;
  label: string;
  routeName: RouteName;
}

export const TabBarButton = ({
  isFocused,
  onPress,
  label,
  routeName,
}: ITabBarButtonProps) => {
  const icons: Record<
    RouteName,
    (props: { focused: boolean; color: string }) => JSX.Element
  > = {
    index: (props) => (
      <FontAwesome5 name="newspaper" size={26} color={props.color} />
    ),
    treninzi: (props) => (
      <FontAwesome5 name="water" size={26} color={props.color} />
    ),
    plivaci: (props) => (
      <FontAwesome5 name="swimmer" size={26} color={props.color} />
    ),
  };

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const IconComponent = icons[routeName] || (() => <Text>Unknown Icon</Text>);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1.1]);
    const topValue = interpolate(scale.value, [0, 1], [0, -15]);
    return {
      transform: [{ scale: scaleValue }],
      top: topValue,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity: opacityValue,
    };
  });

  const animatedBubbleStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(scale.value, [0, 1], [0, 1]);
    return {
      opacity: opacityValue,
    };
  });

  return (
    <Pressable onPress={onPress} key={routeName} style={styles.tabBarItem}>
      <Animated.View
        style={[styles.bubble, styles.shadow, animatedBubbleStyle]}
      ></Animated.View>

      <Animated.View style={[animatedIconStyle]}>
        {IconComponent({
          focused: isFocused,
          color: isFocused ? Colors.global.polynesianBlue : Colors.global.white,
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color: isFocused
              ? Colors.global.polynesianBlue
              : Colors.global.white,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    position: "absolute",
    borderRadius: 25,
    width: 50,
    height: 50,
    top: -30,
    backgroundColor: Colors.global.white,
  },
  shadow: Platform.select({
    ios: {
      shadowColor: Colors.global.polynesianBlue,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
    },
    android: {
      shadowColor: Colors.global.white,
      elevation: 20,
    },
  }),
});
