//what is react taint?
//  --> use it as a way to work with user data without returning it to the client


// how do you get the data from the server?
// 1) HTTP APIs (for existing large projects/orgs)
// 2) Data Access Layer (for new projects)
// 3) Component Level Data Access (ffor prototyping and learning)

// what is server-only?
// --> exposing an endpoint for the client to hit
// pnpm add server-only

// what is client-only?
// --> ships java script to the client, still runs on the server


import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {

    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    // select all images for the user
    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });
    return images;
}