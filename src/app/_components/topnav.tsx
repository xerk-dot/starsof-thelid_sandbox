import { Sign } from "crypto";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
export default function TopNav() {
    return (
      <nav className="flex w-full iitems-center justify-between p-4 border-b text-xl font-semibold">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }