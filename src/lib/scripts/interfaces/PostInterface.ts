export interface PostMeta {
    pubDate: string;
    tags: string[];
}

export interface PartialPostData {
    thumbnail: string;
    title: string;
    slug: string;
    meta: PostMeta;
}

export interface PostData extends PartialPostData {
    content: string;
}
