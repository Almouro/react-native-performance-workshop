import { FlatList, Text, View } from "react-native";

const Item = ({ index }: { index: number }) => (
  <View style={{ backgroundColor: "purple", margin: 3, padding: 10 }}>
    <Text style={{ fontSize: 30, color: "white" }}>ITEM {index}</Text>
  </View>
);

export const ListExperiment = () => {
  return (
    <FlatList
      renderItem={({ item }) => <Item index={item} />}
      data={Array(300)
        .fill(null)
        .map((_, index) => index)}
    />
  );
};
