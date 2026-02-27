import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
        return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Handle events
    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("✅ Payment confirmed:", {
                sessionId: session.id,
                customer: session.customer_details?.email,
                amount: session.amount_total,
            });
            // TODO: Extend this block to:
            // - Send a confirmation email
            // - Create a fulfillment record in Sanity
            // - Trigger any other post-purchase workflows
            break;
        }
        case "payment_intent.payment_failed": {
            const intent = event.data.object as Stripe.PaymentIntent;
            console.error("❌ Payment failed:", intent.last_payment_error?.message);
            break;
        }
        default:
            console.log(`Unhandled Stripe event: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
