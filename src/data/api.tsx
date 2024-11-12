import camelcaseKeys from "camelcase-keys";
import { Photo } from "./model/photo.quicktype";
import { PhotoAPIResponse } from "./model/PhotoApiResponse.quicktype";

// We mock the API to ensure we don't get rate limited
const mockHttpCall = async (
  followingOrDiscover: "following" | "discover"
): Promise<PhotoAPIResponse> => {
  // Add a delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return followingOrDiscover === "following"
    ? require("./raw/following.json")
    : require("./raw/discover.json");
};

export const fetchPhotos = async (
  search: "following" | "discover"
): Promise<Photo[]> => {
  const json = await mockHttpCall(search);

  const photos = camelcaseKeys(
    json.results as unknown as Record<string, unknown>,
    {
      deep: true,
    }
  ) as unknown as Photo[];

  return photos;
};

export const fetchNotifications = async (): Promise<{
  notificationCount: number;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    notificationCount: 12,
  };
};
