import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "./api";
import { Photo } from "./model/photo.quicktype";

export const useFollowingPhotos = () => usePhotos("following");
export const useDiscoverPhotos = () => usePhotos("discover");

const formatPhoto = (photo: Photo) => ({
  ...photo,
  pub: new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(photo.createdAt)),
});

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
