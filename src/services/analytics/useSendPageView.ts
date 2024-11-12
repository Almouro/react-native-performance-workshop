import { useIsFocused } from "@react-navigation/native";
import { Analytics } from "./src";
import { useEffect } from "react";

export const useSendPageView = (pageName: string, additionalData) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    // Send analytics view
  }, [isFocused]);
};
