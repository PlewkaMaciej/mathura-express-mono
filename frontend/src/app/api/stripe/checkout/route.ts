import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST() {
  try {
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.boughtCourse) {
      return NextResponse.json(
        { error: "Course already purchased" },
        { status: 400 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url:
        "http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/payment/cancel",
      customer_email: user.email,
      client_reference_id: user.id,
      metadata: {
        userId: user.id,
        productType: "matura-course",
      },
      line_items: [
        {
          price: process.env.STRIPE_COURSE_PRICE_ID!,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
