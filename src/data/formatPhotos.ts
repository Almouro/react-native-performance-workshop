import { Photo } from "./model/photo.quicktype";

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
});

export const formatPhoto = (photo: Photo) => ({
  ...photo,
  pub: formatter.format(new Date(photo.createdAt)),
});
