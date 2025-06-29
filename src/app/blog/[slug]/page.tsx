import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/posts"));
  return files.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/posts", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />
    </div>
  );
}
