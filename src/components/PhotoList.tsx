import React from "react";
import { FlatList, View } from "react-native";
import { Photo } from "../data/model/photo.quicktype";
import { PhotoListItem } from "./PhotoListItem/PhotoListItem";

const Separator = () => <View style={{ height: 16 }} />;

export const PhotoList = ({ photos }: { photos: Photo[] }) => {
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => <PhotoListItem photo={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      style={{ backgroundColor: "white" }}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};
