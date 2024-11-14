import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Photo } from "../../data/model/photo.quicktype";
import { ProfileHeader } from "./ProfileHeader";
import { ButtonsFooter } from "./ButtonsFooter";
import { useSafeAreaFrame } from "react-native-safe-area-context";

export const PhotoListItem = ({ photo }: { photo: Photo }) => {
  const aspectRatio = photo.width / photo.height;

  const { width, height } = useSafeAreaFrame();

  const imageWidth = width;

  return (
    <View style={styles.container} key={photo.id}>
      <ProfileHeader user={photo.user} />
      <View
        style={{
          minWidth: "100%",
          maxHeight: height / 2,
          height: undefined,
          aspectRatio,
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: `${photo.urls.raw}&w=${imageWidth}` }}
          resizeMode="cover"
        />
      </View>
      <ButtonsFooter photo={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
