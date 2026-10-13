import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";



const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(150).optional().default(""),
  service: z.enum([
    "web-development",
    "web-application",
    "ui-ux-design",
    "digital-strategy",
    "ecommerce",
    "other",
  ]),
  message: z.string().trim().min(10).max(3000),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form fields and try again.",
        },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "The enquiry service is not configured yet.",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("enquiries")
      .insert({
        name: result.data.name,
        email: result.data.email,
        company: result.data.company,
        service: result.data.service,
        message: result.data.message,
      });

    if (error) {
      console.error("Supabase enquiry insert failed:", error.code);

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't save your enquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully!",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request. Please try again.",
      },
      { status: 400 }
    );
  }
}