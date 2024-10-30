import { Animated, Image, StyleSheet, View } from "react-native";

import { NewsBubble } from "@/components/NewsBubble";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import ScrollView = Animated.ScrollView;
import { WorldNewsBubble } from "@/components/WorldNewsBubble";

const newsData = [
  {
    id: 0,
    datum: "12.12.2024.",
    trener: "Radisic Milorad",
    vest: "Nema treninga.",
    image: require("@/assets/images/milorad-radisic.jpg"),
  },
  {
    id: 1,
    datum: "12.12.2024.",
    trener: "Dragan Jocic",
    vest: "Ognjen Milovanovic je kralj.",
    image: require("@/assets/images/dragan-jocic.jpeg"),
  },
  {
    id: 2,
    datum: "12.12.2024.",
    trener: "Dragan Jocic",
    vest: "Ja sam najbolji trener.",
    image: require("@/assets/images/dragan-jocic.jpeg"),
  },
];

export default function Index(): JSX.Element {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.global.oxfordBlue,
        dark: "#1D3D47",
      }}
      headerImage={
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/proleter_logo.png")}
            style={styles.logo}
          />
        </View>
      }
    >
      <ThemedText style={styles.subcategoryText}>
        Klupska Obavestenja
      </ThemedText>
      {newsData.map((news) => {
        return (
          <NewsBubble
            key={news.id}
            date={news.datum}
            poster={news.trener}
            text={news.vest}
            image={news.image}
          />
        );
      })}
      <ThemedText style={styles.subcategoryText}>Svet Plivanja</ThemedText>
      <ScrollView horizontal style={styles.worldNewsScrollView}>
        <WorldNewsBubble />
        <WorldNewsBubble />
        <WorldNewsBubble />
        <WorldNewsBubble />
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    marginTop: 10,
    fontSize: 24,
    color: Colors.global.white,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    bottom: 0,
    height: 80,
    shadowColor: Colors.global.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    marginLeft: 10,
  },
  logo: {
    bottom: 0,
    height: 60,
    resizeMode: "contain",
    width: 60,
  },
  subcategoryText: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 20,
    lineHeight: 28,
  },
  worldNewsScrollView: {},
});
