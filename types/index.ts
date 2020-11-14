export type Meta = {
  title: string;
  created: string;
  status: "draft" | "published";
  preview?: string;
  reading_time?: number;
};

export type ImportedPost = {
  path: string;
  module: NodeModule & {
    meta: Meta;
  };
};
