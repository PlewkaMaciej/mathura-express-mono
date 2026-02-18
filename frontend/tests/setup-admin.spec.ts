import { test as setup } from "@playwright/test";
import { createClerkClient } from "@clerk/backend";

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY!,
});

setup("authenticate admin", async ({ page }) => {
  const users = await clerk.users.getUserList({
    emailAddress: ["plewkamaciej9@gmail.com"],
  });

  const admin = users.data[0];

  if (!admin) {
    throw new Error("Admin user not found in Clerk");
  }

  await clerk.users.updateUser(admin.id, {
    publicMetadata: { role: "admin" },
  });

  const sessions = await clerk.sessions.getSessionList({
    userId: admin.id,
  });

  for (const s of sessions.data) {
    await clerk.sessions.revokeSession(s.id);
  }

  const session = await clerk.sessions.createSession({
    userId: admin.id,
  });

  const token = await clerk.sessions.getToken(session.id);

  await page.context().addCookies([
    {
      name: "__session",
      value: token.jwt,
      url: "http://localhost:3000",
      httpOnly: true,
    },
  ]);

  await page.context().storageState({ path: "admin-auth.json" });
});
