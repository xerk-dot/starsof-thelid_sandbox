import Link from "next/link";
import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

//every time a change occurs in the database, the page will be re-rendered
export const dynamic = "force-dynamic";


async function Images() {
  
  const images = await getMyImages();

  return (
    <div className="flex flex-col gap-2">
      {/* <div className="w-full h-full text-2xl">Images</div> */}
      <div className="flex flex-wrap gap-2">
        {/*[...images, ...images, ...images,]*/}
        {images.map((image) => (
          <div key={image.id} className="w-48 h-48 flex flex-col">
            <Link href={`/img/${image.id}`}>
              <Image 
                src={image.url} 
                alt={image.name} 
                width={192}
                height={192}
                style={{ objectFit: "contain" }} 
              />
            </Link>
                          {/* w/o next image component
              <img src={image.url} /> */}
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function HomePage() {
  
  return (
    <main className="">
      
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above.</div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  );
}
