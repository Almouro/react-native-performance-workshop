import camelcaseKeys from "camelcase-keys";
import { Photo, PhotoAPIResponse } from "./model/photo.quicktype";

// CHANGE THIS TO YOUR OWN CLIENT ACCESS KEY
const CLIENT_ACCESS_KEY = process.env.UNSPLASH_API_KEY ?? "REPLACE_ME";
const USE_MOCKED_DATA = true;

export const getAPISearchResults = async (
  search: string,
  page = 1
): Promise<Record<string, unknown>> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      search
    )}&per_page=25&client_id=${CLIENT_ACCESS_KEY}&page=${page}`
  );
  const json = await response.json();

  return json;
};

const mockDiscoverPhotos: any[] = [];
for (let i = 0; i < 25; i++) {
  mockDiscoverPhotos.push(require("./raw/guineapig.json").results[i]);
  mockDiscoverPhotos.push(require("./raw/dog.json").results[i]);
  mockDiscoverPhotos.push(require("./raw/rabbit.json").results[i]);
  mockDiscoverPhotos.push(require("./raw/panda.json").results[i]);
}

const mockFollowingPhotos: any[] = [];
for (let i = 29; i > 30 - 25; i--) {
  mockFollowingPhotos.push(require("./raw/guineapig.json").results[i]);
  mockFollowingPhotos.push(require("./raw/dog.json").results[i]);
  mockFollowingPhotos.push(require("./raw/rabbit.json").results[i]);
  mockFollowingPhotos.push(require("./raw/panda.json").results[i]);
}

// We mock the API to ensure we don't get rate limited
const mockHttpCall = async (
  followingOrDiscover: "following" | "discover"
): Promise<Record<string, unknown>> => {
  // Add a delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    results:
      followingOrDiscover === "following"
        ? mockFollowingPhotos
        : mockDiscoverPhotos,
  };
};

export const fetchPhotos = async (
  search: "following" | "discover"
): Promise<Photo[]> => {
  const json = await mockHttpCall(search);

  const photos = camelcaseKeys(json, {
    deep: true,
  }) as unknown as PhotoAPIResponse;

  return photos.results;
};

export const fetchNotifications = async (): Promise<{
  notificationCount: number;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    notificationCount: 12,
  };
};
