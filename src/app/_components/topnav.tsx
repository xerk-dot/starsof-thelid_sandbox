"use client";
import { Sign } from "crypto";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
export default function TopNav() {

    const router = useRouter();

    return (
      <nav className="flex w-full iitems-center justify-between p-4 border-b text-xl font-semibold">
        <div>STARSOF THELID</div>
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton 
                  endpoint="imageUploader"  
                  onClientUploadComplete={() => {
                    router.refresh(); //rerun the current route and send down to refresh page
                  }}
                />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }