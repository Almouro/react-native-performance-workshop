import { useState } from "react";
import { Button, Text } from "react-native";

export const ReactDevTools = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onPress={() => setCount((prev) => prev + 1)} title="INCREMENT" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        {count}
      </Text>
    </>
  );
};
