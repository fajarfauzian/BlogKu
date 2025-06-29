import { getSortedPostsData } from "@/lib/posts";
import PostListClient from "./PostListClient";

export default async function BlogPage() {
  const allPosts = getSortedPostsData();

  return <PostListClient initialPosts={allPosts} />;
}