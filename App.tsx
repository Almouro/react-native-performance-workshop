import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { RootNavigator } from "./src/screens/RootNavigator";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { wrapWithShowButton } from "./src/utils/wrapWithShowButton";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

const Navigator = wrapWithShowButton(RootNavigator);

export default function App() {
  const [loaded] = useFonts({
    ...MaterialIcons.font,
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
