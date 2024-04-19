export interface PhotoAPIResponse {
  total: number;
  totalPages: number;
  results: Photo[];
}

export interface Photo {
  id: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date | null;
  width: number;
  height: number;
  color: string;
  blurHash: null | string;
  description: null | string;
  altDescription: string;
  breadcrumbs: any[];
  urls: Urls;
  links: PhotoLinks;
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: PhotoTopicSubmissions;
  user: User;
  tags: Tag[];
}

export interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  downloadLocation: string;
}

export interface Tag {
  type: Type;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: null | string;
  metaTitle: string;
  metaDescription: string;
  coverPhoto: CoverPhoto;
}

export interface Ancestry {
  type: Category;
  category?: Category;
  subcategory?: Category;
}

export interface Category {
  slug: Slug;
  prettySlug: string;
}

export enum Slug {
  Animals = 'animals',
  Apps = 'apps',
  Backgrounds = 'backgrounds',
  Beautiful = 'beautiful',
  Blue = 'blue',
  Brown = 'brown',
  Colors = 'colors',
  Cool = 'cool',
  Cute = 'cute',
  Desktop = 'desktop',
  Facebook = 'facebook',
  Family = 'family',
  Feelings = 'feelings',
  Food = 'food',
  Fox = 'fox',
  Fruits = 'fruits',
  Funny = 'funny',
  Grass = 'grass',
  Grey = 'grey',
  Happy = 'happy',
  Images = 'images',
  Kids = 'kids',
  Laptop = 'laptop',
  LightBlue = 'light-blue',
  Mexico = 'mexico',
  Money = 'money',
  Mouse = 'mouse',
  Nature = 'nature',
  Ocean = 'ocean',
  Orange = 'orange',
  People = 'people',
  Pineapple = 'pineapple',
  Stone = 'stone',
  Things = 'things',
  Travel = 'travel',
  Turkey = 'turkey',
  Wallpapers = 'wallpapers',
  Water = 'water',
}

export interface CoverPhoto {
  id: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date | null;
  width: number;
  height: number;
  color: Color;
  blurHash: string;
  description: null | string;
  altDescription: string;
  breadcrumbs: Breadcrumb[];
  urls: Urls;
  links: PhotoLinks;
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: CoverPhotoTopicSubmissions;
  premium?: boolean;
  plus?: boolean;
  user: User;
}

export interface Breadcrumb {
  slug: Slug;
  title: string;
  index: number;
  type: Type;
}

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search',
}

export enum Color {
  A64040 = '#a64040',
  A6A6A6 = '#a6a6a6',
  C08C73 = '#c08c73',
  C0C0C0 = '#c0c0c0',
  C0D9D9 = '#c0d9d9',
  D9D9D9 = '#d9d9d9',
  F38C0C = '#f38c0c',
  F3F3C0 = '#f3f3c0',
  F3F3F3 = '#f3f3f3',
  The0C2626 = '#0c2626',
  The0C2640 = '#0c2640',
  The0C8Ca6 = '#0c8ca6',
  The202128 = '#202128',
  The260C0C = '#260c0c',
  The262626 = '#262626',
  The262640 = '#262640',
  The2F170E = '#2F170E',
  The404040 = '#404040',
  The597340 = '#597340',
  The8C7340 = '#8c7340',
}

export interface CoverPhotoTopicSubmissions {
  animals?: Animals;
  health?: Animals;
  texturesPatterns?: Animals;
  wallpapers?: Animals;
  colorOfWater?: Animals;
  architectureInterior?: Animals;
  nature?: Animals;
  colorTheory?: CozyMoments;
  blue?: Animals;
}

export interface Animals {
  status: Status;
  approvedOn?: Date;
}

export enum Status {
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface CozyMoments {
  status: Status;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  smallS3: string;
}

export interface User {
  id: string;
  updatedAt: Date;
  username: string;
  name: string;
  firstName: string;
  lastName: null | string;
  twitterUsername: null | string;
  portfolioURL: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profileImage: ProfileImage;
  instagramUsername: null | string;
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
  totalPromotedPhotos: number;
  acceptedTos: boolean;
  forHire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagramUsername: null | string;
  portfolioURL: null | string;
  twitterUsername: null | string;
  paypalEmail: null;
}

export interface PhotoTopicSubmissions {
  animals?: Animals;
  cozyMoments?: CozyMoments;
  nature?: CozyMoments;
  wallpapers?: CozyMoments;
}
