// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    company: { type: "string", required: true },
    category: { type: "enum", options: ["VR", "WebGL", "Game", "Mobile", "Research"], required: true },
    platforms: { type: "list", of: { type: "string" }, required: true },
    year: { type: "number", required: true },
    thumbnail: { type: "string", required: true },
    images: { type: "list", of: { type: "string" }, default: [] },
    featured: { type: "boolean", default: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    summary: { type: "string", required: true },
    impact: { type: "string" },
    order: { type: "number", default: 99 }
  },
  computedFields: {
    url: { type: "string", resolve: (p) => `/work/${p.slug}` }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    published: { type: "boolean", default: false }
  },
  computedFields: {
    slug: { type: "string", resolve: (p) => p._raw.flattenedPath.replace("posts/", "") }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  outputDir: "content/generated",
  documentTypes: [Project, Post],
  mdx: { rehypePlugins: [[rehypePrettyCode, { theme: "vesper" }]] }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4SZQAX4Z.mjs.map
