import prisma from "../../../lib/prisma";
import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    console.log("Starting webhook verification...");

    const evt = await verifyWebhook(req);

    console.log("Webhook event verified:", evt);

    const { id } = evt.data || {};
    const eventType = evt.type;

    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );

    if (eventType === "user.created") {
      const { id: clerkId, email_addresses, first_name, last_name } = evt.data;

      console.log("Creating/updating user:", clerkId, email_addresses);

      await prisma.user.upsert({
        where: { clerkId: clerkId },
        update: {
          firstName: first_name || null,
          lastName: last_name || null,
          email: email_addresses?.[0]?.email_address || "",
        },
        create: {
          clerkId: clerkId,
          firstName: first_name || null,
          lastName: last_name || null,
          email: email_addresses?.[0]?.email_address || "",
        },
      });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error in webhook handler:", err);
    return new Response("Error verifying webhook", { status: 500 });
  }
}
export async function GET(req:NextRequest) {
  return new Response("Webhook received", { status: 200 });
}