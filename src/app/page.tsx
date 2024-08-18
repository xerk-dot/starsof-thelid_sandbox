import Link from "next/link";
import { db } from "~/server/db";
const mockUrls = [
  "https://placehold.co/600x400/D00000/FFFFFF/png",
  "https://placehold.co/600x400/FF00FF/000000/png",
  "https://placehold.co/600x400/D0D0D0/FFFFFF/png",
  "https://placehold.co/600x400/FF0F00/000000/png"
];

const mockImages = mockUrls.map((url, index)=> ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  

  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages,].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
