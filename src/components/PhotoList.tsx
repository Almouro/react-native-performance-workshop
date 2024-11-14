import React from "react";
import { FlatList, View } from "react-native";
import { Photo } from "../data/model/photo.quicktype";
import { PhotoListItem } from "./PhotoListItem/PhotoListItem";
import { FlashList } from "@shopify/flash-list";

const Separator = () => <View style={{ height: 16 }} />;

export const PhotoList = ({ photos }: { photos: Photo[] }) => {
  return (
    <FlashList
      data={photos}
      renderItem={({ item }) => <PhotoListItem photo={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      contentInsetAdjustmentBehavior="automatic"
      estimatedItemSize={468}
    />
  );
};
