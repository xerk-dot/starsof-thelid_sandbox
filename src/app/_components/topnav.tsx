"use client";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from 'next/link';

export function TopNav() {
    return (
      <nav className="flex w-full iitems-center justify-between p-4 border-b text-xl font-semibold">
        <Link href="/">STARSOF THELID</Link>
        <div className="flex flex-row items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }