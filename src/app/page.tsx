import Link from "next/link";
import { db } from "~/server/db";

//every time a change occurs in the database, the page will be re-rendered
export const dynamic = "force-dynamic";



export default async function HomePage() {
  
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
        {[...images, ...images, ...images,].map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
