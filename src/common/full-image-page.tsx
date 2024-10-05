
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage, findImage } from "~/server/queries";
import Home from "src/app/_components/map.jsx"; // Import the Home component from map.jsx

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const res = await findImage(idAsNumber);
  if (res.status === 404) return <div>Not found</div>;

  const image = await getImage(idAsNumber);
  
  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        {/*<img src={image.url} className="object-contain" alt={image.name} />  */}
        <div className="object-contain"> <Home /> </div>
           
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>
        <div className="p-2">
          <div>Longitude:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>
        <div className="p-2">
          <div>Latitude:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

      </div>
    </div>
  );
}