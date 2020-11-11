export type Meta = {
  title: string;
  preview: string;
  created: string;
  status: "draft" | "published";
};

export type ImportedPost = {
  path: string;
  module: NodeModule & {
    meta: Meta;
  };
};
