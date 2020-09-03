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

interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: {
    allowed: string[];
    blocked: string[];
  };
}

export interface Item {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
}

export interface Video {
  etag: string;
  items: Item[];
  kind: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}
