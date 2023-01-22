# Apollo-blog

The project was rewritten with Next.js and GraphQL.

> Fill free to contribute even small things, I will be very happy with your help.*

## Required tools

1. Node.js >= 16
2. `npm` >= 8
3. MongoDB >= 5.0

## Installation

1. Clone or fork this repository.
2. Create or ask someone for `.env` file which contains Firebase keys and other stuff.
3. Run `npm install`
4. Run `npx prisma generate`
5. Run `npx prisma db seed`
6. Run `npm run dev`

The backend API you can find under `http://localhost:3000/api/graphql`

## Project structure and Business logic

This project is using `schema.graphql` for defining GraphQL schema and `prisma/schema.prisma` for defining
Prisma database schema.

From the business perspective this project is pretty much obvious. User can create draft posts which he can publish later. Also, everybody can comments posts.

> There is no strict business rules which we are going to achieve, so fill free to propose your ideas and visions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
