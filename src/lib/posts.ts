// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostData = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export function getSortedPostsData(): PostData[] {
  const postsDir = path.join(process.cwd(), 'src/content/posts');
  const filenames = fs.readdirSync(postsDir);

  const allPostsData = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || content.substring(0, 150).replace(/[#*]/g, ''),
      tags: data.tags || [],
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}