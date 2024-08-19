# sandbox


## what tech is used?
- PostgreSQL
- TS
- Shadui
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)



## things I did in this repo


- [x]   Make it deploy (vercel)
- [x]	Scaffold basic ui with mock data
- [x]	Tidy up build process
- [x]   Actually set up a database (vercel postgres)
- [x]   Customize database schema
- [x]	Attach database to UI
- [x]	Add authentication (w/ clerk)
- [x]	Add image upload
- [ ]	"taint" (server-only)
- [ ]	Use Next/Image component
- [ ]	Error management (w/ Sentry)
- [ ]	Routing/image page (parallel route)
- [ ]	Update upload button to be less cringe
- [ ]	Analytics (posthog)
- [ ]	Delete button (w/ Server Actions)
- [ ]	Ratelimiting (upstash)


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




-->