# MathuraExpress

MathuraExpress is a web application for preparing for the Polish mathematics matura exam. The project combines a course landing page, Stripe payments, an exam sheet generator, closed and open task solving, OpenAI-based grading for open answers, drawing-based answers, and an admin panel for managing tasks.

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS 3
- Clerk for authentication
- Prisma with SQLite
- Stripe Checkout and Stripe webhooks
- OpenAI for similar-task generation and open-answer grading
- ImageKit for storing drawing answers as image files
- KaTeX / remark-math / rehype-katex for math rendering
- Konva / react-konva for drawing answers
- Playwright for end-to-end tests

## Main Features

### Public Pages

- Modern homepage with course messaging, CTAs, feature cards, and course preview.
- Shared header and footer.
- Course purchase page at `/buyCourse`.
- Payment success page at `/payment/success`.

### Authentication

- Sign-in and sign-up are handled by Clerk:
  - `/sign-in`
  - `/sign-up`
- Clerk localization is configured in `clerkStyles/clerkLocale.ts`.

### Course Purchase

- The purchase button calls `POST /api/stripe/checkout`.
- Checkout creates a Stripe session using `STRIPE_COURSE_PRICE_ID`.
- After payment, Stripe redirects the user to `/payment/success`.
- The webhook `POST /api/stripe/webhook` marks the user as having course access by setting `boughtCourse: true`.

### Exam Sheet Generator

- The `/generator` page lets users create matura exam sheets.
- The user's generated sheets are loaded from `GET /api/matura/userMaturas`.
- A new sheet is generated with `POST /api/matura/generate`.
- Clicking a generated sheet opens `/matura/[id]`.

### Exam Sheet and Tasks

- The `/matura/[id]` page displays:
  - exam sheet header,
  - number of closed and open tasks,
  - current score,
  - solved-task progress.
- Closed task answers are saved through `POST /api/matura/closed-answers`.
- Open tasks support:
  - text answers,
  - drawing answers,
  - task content visible inside the drawing modal,
  - editing lock after submission,
  - feedback and awarded points.
- Open answers are saved through `POST /api/matura/open-answers`.
- Similar open-task practice is generated through `POST /api/practice/open`.
- Practice answers are graded through `POST /api/practice/open/grade`.

### Admin Panel

- Admin panel route: `/admin-panel`.
- The admin task form supports:
  - closed tasks,
  - open tasks,
  - sections and subsections,
  - grading rubric,
  - reference answer.
- Sections are loaded from `GET /api/sections`.
- Tasks are saved through `POST /api/tasks`.

### Video and Questions

- Example video page: `/videoexample`.
- Related endpoints:
  - `GET /api/videos`
  - `GET /api/videos/[id]/questions`
  - `POST /api/questions/[id]/answers`

## Important Routes

| Route              | Description                     |
| ------------------ | ------------------------------- |
| `/`                | Homepage                        |
| `/buyCourse`       | Course purchase page            |
| `/payment/success` | Successful payment confirmation |
| `/generator`       | User exam sheet generator       |
| `/matura/[id]`     | Solve a specific exam sheet     |
| `/admin-panel`     | Admin panel                     |
| `/sign-in`         | Sign in                         |
| `/sign-up`         | Sign up                         |
| `/videoexample`    | Example video page              |

## Project Structure

```txt
src/
  app/
    api/                 Application API routes
    admin-panel/         Admin panel
    buyCourse/           Purchase page
    generator/           Exam sheet generator
    matura/[id]/         Exam sheet solving view
    payment/success/     Payment success page
    sign-in/             Clerk sign-in
    sign-up/             Clerk sign-up
  components/
    adminPanel/          Admin form components
    openTask/            Open tasks, drawing, math rendering
    video/               Video components
    Toast/               Toast provider
  hooks/                 Open-answer hooks
  lib/                   Prisma, Stripe, OpenAI, Axios
prisma/
  schema.prisma          Data model
  dev.db                 Local SQLite database
tests/
  *.spec.ts              Playwright tests
scripts/
  *.ts                   OpenAI/vector-store and seed scripts
```

## Environment Variables

Create a `.env` or `.env.local` file.

```env
DATABASE_URL="file:./dev.db"

OPENAI_API_KEY=""
OPENAI_MODEL="gpt-4o-mini"
OPENAI_VECTOR_STORE_ID=""

STRIPE_SECRET_KEY=""
STRIPE_COURSE_PRICE_ID=""
STRIPE_WEBHOOK_SECRET=""

IMAGEKIT_PUBLIC_KEY=""
IMAGEKIT_PRIVATE_KEY=""
IMAGEKIT_URL_ENDPOINT=""

NEXT_PUBLIC_API_URL="http://localhost:3000"
```

Clerk also requires the standard environment variables for a Next.js Clerk application, depending on the Clerk instance configuration.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Configure `.env`.

3. Generate the Prisma client if needed:

```bash
npx prisma generate
```

4. Start the development server:

```bash
npm run dev
```

5. Open:

```txt
http://localhost:3000
```

## Commands

```bash
npm run dev
```

Runs Next.js in development mode with Turbopack.

```bash
npm run build
```

Builds the production application.

```bash
npm run start
```

Starts the production build.

```bash
npx tsc --noEmit
```

Runs TypeScript checks without emitting files.

```bash
npx playwright test
```

Runs end-to-end tests.

## Tests

Playwright is configured in `playwright.config.ts`.

- `tests/setup-admin.spec.ts` signs in an admin user and stores the browser state in `admin-auth.json`.
- `tests/home.spec.ts` verifies that the homepage loads.
- `tests/admin.spec.ts` verifies that the admin panel renders.
- `tests/addTask.spec.ts` tests adding an open task.

The Playwright configuration starts `npm run dev` and uses `http://localhost:3000`.

## Database

The project uses SQLite through Prisma.

Important models:

- `User` - Clerk-linked user, role, and course purchase state.
- `Matura` - generated exam sheet.
- `UserMatura` - exam sheet assigned to a user, including score and status.
- `ClosedTasks` / `OpenTasks` - closed and open tasks.
- `UserClosedAnswer` / `UserOpenAnswer` - user answers.
- `Section` / `SubSection` - topic and subtopic structure.
- `Video`, `Question`, `Answer` - video and question area.

## Stripe

Checkout is handled by `POST /api/stripe/checkout`.

The webhook handles `checkout.session.completed`. After a paid session, the backend finds the user by `metadata.userId` or `client_reference_id` and sets:

```ts
boughtCourse: true;
```

For local webhook testing, use the Stripe CLI and forward events to:

```txt
http://localhost:3000/api/stripe/webhook
```

## OpenAI and Open Tasks

OpenAI is used for:

- generating similar open tasks,
- grading open answers and returning feedback.

The default model is `gpt-4o-mini` when `OPENAI_MODEL` is not set.

Scripts in `scripts/` can create and populate a vector store:

```bash
npx tsx scripts/createVectorStore.ts
npx tsx scripts/uploadToVectorStore.ts
```

## ImageKit

Drawing answers can be submitted as base64 images. The backend uploads them to ImageKit and stores the resulting URL in `UserOpenAnswer.screenshotUrl`.

## Development Notes

- The repository includes a local database at `prisma/dev.db`. Tests and the running application may modify it.
- `admin-auth.json` is Playwright session state and may change after tests.
- Next.js may warn about multiple lockfiles if another `package-lock.json` exists outside this project directory.
- The `npm run lint` script points to `next lint`, which may require a configuration update in newer Next.js versions.
