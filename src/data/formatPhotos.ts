import { Photo } from "./model/photo.quicktype";

export const formatPhoto = (photo: Photo) => ({
  ...photo,
  pub: new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(photo.createdAt)),
});
