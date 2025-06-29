import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  // Corrected path to include 'src'
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Semua Postingan</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}