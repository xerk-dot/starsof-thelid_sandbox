import Link from "next/link";
import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";;
import Home from "src/app/_components/map.jsx";

//every time a change occurs in the database, the page will be re-rendered
export const dynamic = "force-dynamic";


async function Images() {
  
  const images = await getMyImages();

  return (
    <div>
       <Tabs defaultValue="account" > {/* className="w-[400px]"> */}

        <TabsList>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
        </TabsList>

        
        <TabsContent value="map">

          <Home />

          
        </TabsContent>

        <TabsContent value="locations">

            <div className="flex flex-wrap gap-4 p-4">
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

        </TabsContent>
      </Tabs>



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
