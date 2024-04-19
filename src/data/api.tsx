import camelcaseKeys from 'camelcase-keys';
import {Photo, PhotoAPIResponse} from './model/photo.quicktype';

// CHANGE THIS TO YOUR OWN CLIENT ACCESS KEY
const CLIENT_ACCESS_KEY = 'REPLACE_ME';
const USE_MOCKED_DATA = true;

export const getAPISearchResults = async (search: string): Promise<object> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      search,
    )}&per_page=30&client_id=${CLIENT_ACCESS_KEY}`,
  );
  const json = await response.json();

  return json;
};

// We mock the API to ensure we don't get rate limited
const mockHttpCall = async (search: string): Promise<object> => {
  // Add a delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500));

  switch (search) {
    case 'panda':
      return require('./raw/panda.json');
    case 'rabbit':
      return require('./raw/rabbit.json');
    case 'dog':
      return require('./raw/dog.json');
    case 'guinea pig':
    default:
      return require('./raw/guineapig.json');
  }
};

export const fetchPhotos = async (search: string): Promise<Photo[]> => {
  const json = USE_MOCKED_DATA
    ? await mockHttpCall(search)
    : await getAPISearchResults(search);
  // @ts-expect-error
  const photos = camelcaseKeys(json, {
    deep: true,
  }) as unknown as PhotoAPIResponse;

  return photos.results;
};

export const fetchNotifications = async (): Promise<{
  notificationCount: number;
}> => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return {
    notificationCount: 12,
  };
};
