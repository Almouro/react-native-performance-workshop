import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const wrapWithShowButton = (Component: React.ComponentType) => {
  if (!__DEV__) return Component;

  return () => {
    const [show, setShow] = React.useState(false);

    return (
      <>
        <SafeAreaView
          style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
        >
          <Button
            title={show ? "Hide" : "Show"}
            onPress={() => setShow(!show)}
          />
        </SafeAreaView>
        {show && <Component />}
      </>
    );
  };
};
