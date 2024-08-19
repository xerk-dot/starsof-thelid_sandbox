# starsof-thelid_sandbox


## what tech is used?
- [PostgreSQL](https://www.postgresql.org/)
- [Shadui](https://ui.shadcn.com/)
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Sentry](https://sentry.io)
- [Clerk](https://clerk.com)
- [Vercel](https://vercel.com)
- [uploadthing](https://uploadthing.com)


## things I did in this repo


- [x]   Make it deploy (vercel)
- [x]	Scaffold basic ui with mock data
- [x]	Tidy up build process
- [x]   Actually set up a database (vercel postgres)
- [x]   Customize database schema
- [x]	Attach database to UI
- [x]	Add authentication (w/ clerk)
- [x]	Add image upload
- [x]	"taint" (server-only); move queries to their own file
- [x]	Use Next/Image component ( <Image\> ) [for high quality images catered to the device](https://vercel.com/docs/image-optimization/limits-and-pricing)
- [x]	Error management (w/ Sentry)
- [ ]	[Routing/image page (parallel route)](https://github.com/vercel/nextgram/)
- [ ]	Update upload button to be less cringe
- [ ]	Analytics (posthog)
- [ ]	Delete button (w/ Server Actions)
- [ ]	Ratelimiting (upstash)

## things to work on

- [ ] use [imaginary for image uploads](https://github.com/h2non/imaginary)
- [ ] use S3 instead of uploadthing
<!-- 

01) create scaffold

pnpm create t3-app@latest

02) commands

# run in development mode
pnpm dev 
# get database to match current schema
pnpm run db:push
# run drizzle studio to explore data (local.drizzle.studio)
pnpm run db:push

03) to use sentry:
http://localhost:3000/sentry-example-page


-->
