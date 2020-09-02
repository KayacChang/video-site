export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
}

export interface Snippet {
  title: string;
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  localized: { title: string; description: string };
  publishedAt: string;
  tags: string;
  thumbnails: Thumbnails;
}

export interface Item {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
}

export interface Video {
  etag: string;
  items: Item[];
  kind: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}
