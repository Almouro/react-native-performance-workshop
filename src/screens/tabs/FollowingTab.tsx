import React from "react";
import { PhotoList } from "../../components/PhotoList";
import { useFollowingPhotos } from "../../data/usePhotos";
import { useSendPageView } from "@/src/services/analytics/useSendPageView";

export const FollowingTab = () => {
  const { photos, isLoading } = useFollowingPhotos();
  useSendPageView("discover", null);

  return isLoading || !photos ? null : <PhotoList photos={photos} />;
};
