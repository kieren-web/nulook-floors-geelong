import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contactSchema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const source = body.source ?? "website";

    // ─── TODO: Supabase insert ──────────────────────────────────────────────
    // import { createClient } from "@supabase/supabase-js";
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // );
    // await supabase.from("leads_nulook_geelong").insert({
    //   name: data.name,
    //   phone: data.phone,
    //   email: data.email,
    //   suburb: data.suburb,
    //   service_type: data.serviceType,
    //   message: data.message,
    //   source,
    // });

    // ─── TODO: GoHighLevel webhook ─────────────────────────────────────────
    // if (process.env.GHL_WEBHOOK_URL) {
    //   await fetch(process.env.GHL_WEBHOOK_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ ...data, source }),
    //   });
    // }

    console.log("[NuLook] Lead received:", { ...data, source });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[NuLook] Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
