import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { clerkClient } from "@clerk/clerk-sdk-node"; // Import Clerk client

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const eventType = evt.type;

    if (eventType === "session.created") {
      const sessionData = evt.data as {
        id: string;
        user_id: string;
        created_at: number;
        status: string;
      };

      const userId = sessionData.user_id;
      const sessionId = sessionData.id;
      const createdAt = sessionData.created_at;

      const user = await prisma.user.findUnique({
        where: { clerkId: userId },
      });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(userId);

        await prisma.user.create({
          data: {
            clerkId: clerkUser.id,
            firstName: clerkUser.firstName || null,
            lastName: clerkUser.lastName || null,
            email: clerkUser.emailAddresses?.[0]?.emailAddress || "",
          },
        });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error in webhook handler:", err);
    return new Response("Error verifying webhook", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return new Response("Webhook received", { status: 200 });
}
