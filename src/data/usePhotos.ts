import {useQuery} from '@tanstack/react-query';
import {fetchPhotos} from './api';
import {Photo} from './model/photo.quicktype';
import {getLikedPhotos} from './localStorage';

const putLikedPhotosFirst = (photos: Photo[]) => {
  const likedPhotoIds = getLikedPhotos();
  return photos.sort((a, b) => {
    if (likedPhotoIds.includes(a.id) && !likedPhotoIds.includes(b.id)) {
      return -1;
    }

    if (!likedPhotoIds.includes(a.id) && likedPhotoIds.includes(b.id)) {
      return 1;
    }

    return 0;
  });
};

export const usePhotos = (search: string) => {
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery({
    queryKey: [search],
    queryFn: async () => {
      const photos = await fetchPhotos(search);
      return putLikedPhotosFirst(photos);
    },
  });

  if (error) {
    throw error;
  }

  return {
    photos,
    isLoading,
  };
};
