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
- [Posthog](https://posthog.com)
- [Upstash](https://upstash.com)
- [Imaginary](https://imaginary.org)
- [Firestore](firestore)

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
- [x]	[Routing/image page (parallel route)](https://github.com/vercel/nextgram/)
- [x]	Update upload button to be less cringe
- [x]	Analytics (posthog)
- [x]	Delete button (w/ Server Actions)
- [x]	Ratelimiting (upstash)
- [X]   Add [GCP firestore (nosql)](https://cloud.google.com/nodejs/docs/reference/firestore/latest) for storing event coordinates. I use [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) to connect to the database.
## things to work on

- [ ] use [imaginary for image uploads](https://github.com/h2non/imaginary)
- [ ] use S3 instead of uploadthing
- [ ] infinite scroll
- [ ] select images on gallery page (state management) (zustand)
- [ ] migrate from vercel postgres to aws
- [ ] explore aws amplify and see if viable for this project
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


04) to install shadui:
pnpm dlx shadcn-ui@latest init
npx shadcn-ui@latest add toast
pnpm dlx shadcn-ui@latest add sonner

05) to install ratelimit:
pnpm install @upstash/ratelimit
pnpm i @upstash/redis