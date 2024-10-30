import type { PropsWithChildren, ReactElement } from "react";
import React from "react";
import { StyleSheet, useColorScheme, useWindowDimensions } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Canvas, vec, Rect, LinearGradient } from "@shopify/react-native-skia";

const HEADER_HEIGHT = 150;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props): JSX.Element {
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  // @ts-expect-error we don't care
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <>
      <ThemedView style={styles.container}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          <Animated.View
            style={[
              styles.header,
              { backgroundColor: headerBackgroundColor[colorScheme] },
              headerAnimatedStyle,
            ]}
          >
            {headerImage}
          </Animated.View>
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  content: {
    alignItems: "center",
    flex: 1,
    gap: 16,
    justifyContent: "center",
    overflow: "hidden",
    padding: 8,
  },
  header: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: 100,
    justifyContent: "flex-start",
    overflow: "hidden",
    paddingHorizontal: 10,
    position: "relative",
    width: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
});
