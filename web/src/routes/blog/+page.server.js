import { promises as fs } from "fs";
import path from "path";

export async function load() {
  // Define the directory where Jekyll generates the posts
  const postsDirectory = path.join(process.cwd(), "_site", "posts");

  // Read all files/folders in the posts directory
  const posts = await fs.readdir(postsDirectory);

  // For each post, read its content
  const postContents = await Promise.all(
    posts.map(async (post) => {
      // Read the content of each post's index.html file
      const content = await fs.readFile(
        path.join(postsDirectory, post, "index.html"),
        "utf-8",
      );
      // Return an object with the post's slug (folder name) and content
      return { slug: post, content };
    }),
  );

  // Return all post contents to be used in the page component
  return { posts: postContents };
}
