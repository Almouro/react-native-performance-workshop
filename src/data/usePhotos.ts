import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "./api";
import { formatPhoto } from "./formatPhotos";

export const useFollowingPhotos = () => usePhotos("following");
export const useDiscoverPhotos = () => usePhotos("discover");

export const usePhotos = (search: "discover" | "following") => {
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery({
    queryKey: [search],
    queryFn: async function getPhotosQueries() {
      const photos = await fetchPhotos(search);

      return photos;
    },
  });

  const formattedPhotos = (photos || []).map(formatPhoto);

  return {
    photos: formattedPhotos,
    isLoading,
  };
};
