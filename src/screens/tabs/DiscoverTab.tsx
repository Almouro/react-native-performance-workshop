import React from "react";
import { ActivityIndicator, Platform, Text, View } from "react-native";
import { useDiscoverPhotos } from "../../data/usePhotos";
import { PhotoList } from "../../components/PhotoList";
import { useCountdown } from "../../components/Countdown/useCountdown";
import { CountdownItem } from "../../components/Countdown/CountdownItem";
import { useSendPageView } from "@/src/services/analytics/useSendPageView";

const REACT_NATIVE_BIRTHDAY = "2025-03-26T08:00:00.000Z";

export const DiscoverTab = () => {
  const { photos, isLoading } = useDiscoverPhotos();
  const [days, hours, minutes, seconds] = useCountdown(REACT_NATIVE_BIRTHDAY);
  useSendPageView("discover", null);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {isLoading ? <ActivityIndicator style={{ marginTop: 10 }} /> : null}
        {photos ? <PhotoList photos={photos} /> : null}
      </View>
      <View
        style={{ flexDirection: "row", backgroundColor: "rgb(40, 44, 52)" }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CountdownItem value={days} text="Days" />
            <CountdownItem value={hours} text="Hours" />
            <CountdownItem value={minutes} text="Min" />
            <CountdownItem value={seconds} text="Sec" />
          </View>

          <Text
            style={{
              color: "rgb(97, 218, 251)",
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            {" "}
            until React Native Birthday 🎂
          </Text>
        </View>
      </View>
    </View>
  );
};
