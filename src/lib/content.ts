import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentKind = "streams";

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  title: string;
  summary: string;
  date: string;
  project?: string;
  status?: string;
  tags: string[];
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

function collectionDir(kind: ContentKind): string {
  return path.join(contentRoot, kind);
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

function readEntry(kind: ContentKind, filename: string): ContentEntry {
  const fullPath = path.join(collectionDir(kind), filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  return {
    kind,
    slug: slugFromFilename(filename),
    title: String(data.title ?? slugFromFilename(filename)),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    project: data.project ? String(data.project) : undefined,
    status: data.status ? String(data.status) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    body: content,
  };
}

export function getCollection(kind: ContentKind): ContentEntry[] {
  const dir = collectionDir(kind);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((filename) => /\.mdx?$/.test(filename))
    .map((filename) => readEntry(kind, filename))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEntry(
  kind: ContentKind,
  slug: string,
): ContentEntry | undefined {
  return getCollection(kind).find((entry) => entry.slug === slug);
}
