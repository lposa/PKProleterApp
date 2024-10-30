import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { ProfileImagePlaceholder } from "@/components/SVGElements";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export const NewsBubble = ({
  date,
  poster,
  text,
  image,
}: {
  date: string;
  poster: string;
  text: string;
  image: string | undefined | ImageSourcePropType;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.global.polynesianBlue, Colors.global.oxfordBlue]}
        style={styles.background}
      />
      <View style={styles.newsBubbleTop}>
        {date && (
          <View style={[styles.dateContainer, styles.shadow]}>
            <ThemedText style={[styles.commonText, styles.dateText]}>
              {date.split(",")[0]}
            </ThemedText>
          </View>
        )}

        <TouchableOpacity style={[styles.newsPosterContainer, styles.shadow]}>
          <ThemedText style={styles.newsPosterText}>{poster}</ThemedText>
        </TouchableOpacity>
      </View>

      {text && (
        <View style={styles.newsTextContainer}>
          <ThemedText
            style={[styles.commonText, styles.newsBubbleText]}
            numberOfLines={3}
          >
            {text}
          </ThemedText>
        </View>
      )}

      <View style={styles.imageContainer}>
        <View style={styles.profilePic}>
          {image ? (
            <Image source={image as ImageSourcePropType} style={styles.image} />
          ) : (
            <ProfileImagePlaceholder />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 150,
    borderRadius: 10,
  },
  commonText: {
    color: Colors.global.white,
  },
  container: {
    elevation: 13,
    flex: 1,
    height: 150,
    padding: 10,
    width: wp("90%"),
  },
  dateContainer: {
    width: "auto",
    borderRadius: 10,
    backgroundColor: Colors.global.white,
    paddingHorizontal: 10,
  },
  dateText: {
    color: Colors.global.polynesianBlue,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: Colors.global.white,
    borderRadius: 100,
    flex: 1,
    height: 70,
    justifyContent: "center",
    position: "absolute",
    right: -10,
    top: -10,
    width: 70,
    zIndex: 2,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  newsBubbleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newsBubbleTop: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    top: 0,
    width: "90%",
    columnGap: 10,
    marginBottom: 20,
  },
  newsPosterContainer: {
    alignItems: "center",
    backgroundColor: Colors.global.white,
    borderRadius: 10,
    marginRight: 20,
    position: "relative",
    textAlign: "center",
    width: "auto",
    zIndex: 1,
    paddingHorizontal: 10,
  },
  newsTextContainer: {
    width: "80%",
    marginVertical: "auto",
  },

  profilePic: {
    zIndex: 3,
  },
  newsPosterText: {
    color: Colors.global.polynesianBlue,
  },

  shadow: Platform.select({
    ios: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    android: {
      elevation: 13,
    },
  }),
});
