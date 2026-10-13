"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  LogOut,
  ShieldCheck,
  LayoutDashboard,
  RefreshCw,
  Mail,
  Building2,
  Clock3,
  CheckCircle2,
  CircleDot,
  ExternalLink,
} from "lucide-react";

import { createClient } from "../lib/supabase";

type Enquiry = {
  id: number;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
};

const serviceLabels: Record<string, string> = {
  "web-development": "Web Development",
  "web-application": "Web Application",
  "ui-ux-design": "UI/UX Design",
  "digital-strategy": "Digital Strategy",
  ecommerce: "E-commerce",
  other: "Other",
};

export default function AdminDashboard() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");
    setNotice("");

    try {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/admin/login");
        return;
      }

      setAdminEmail(user.email ?? "");

      // Verify that this user is a registered administrator.
      const { data: admin, error: adminError } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (adminError || !admin) {
        setErrorMessage(
          "Your account is signed in, but it is not authorized to access the admin dashboard."
        );
        return;
      }

      // RLS permits only registered administrators to read enquiries.
      const { data, error } = await supabase
        .from("enquiries")
        .select(
          "id, name, email, company, service, message, status, created_at"
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Enquiry loading failed:", error.message);
        setErrorMessage(
          "We couldn't load enquiries. Please check your database policies and try again."
        );
        return;
      }

      setEnquiries((data ?? []) as Enquiry[]);
    } catch (error) {
      console.error("Dashboard loading failed:", error);
      setErrorMessage("Something went wrong while loading the dashboard.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
  let active = true;

  const run = async () => {
    if (!active) return;
    await loadEnquiries();
  };

  void run();

  return () => {
    active = false;
  };
}, [loadEnquiries]);

  async function handleStatusChange(
    enquiryId: number,
    newStatus: Enquiry["status"]
  ) {
    setUpdatingId(enquiryId);
    setErrorMessage("");
    setNotice("");

    try {
      const supabase = createClient();

      // Verify the current session and administrator membership.
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/admin/login");
        return;
      }

      const { data: admin, error: adminError } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (adminError || !admin) {
        setErrorMessage("You are not authorized to update enquiries.");
        return;
      }

      const { error } = await supabase
        .from("enquiries")
        .update({ status: newStatus })
        .eq("id", enquiryId);

      if (error) {
        console.error("Status update failed:", error.message);
        setErrorMessage("Unable to update the enquiry status.");
        return;
      }

      setEnquiries((current) =>
        current.map((enquiry) =>
          enquiry.id === enquiryId
            ? { ...enquiry, status: newStatus }
            : enquiry
        )
      );

      setNotice("Enquiry status updated successfully.");
    } catch (error) {
      console.error("Status update failed:", error);
      setErrorMessage("Something went wrong while updating the status.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  const totalCount = enquiries.length;
  const newCount = enquiries.filter((item) => item.status === "new").length;
  const contactedCount = enquiries.filter(
    (item) => item.status === "contacted"
  ).length;
  const closedCount = enquiries.filter(
    (item) => item.status === "closed"
  ).length;

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#20211f]">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 bg-white px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c94f38] text-2xl font-bold text-white">
            e.
          </span>
          <span>
            <strong className="block text-lg">ethixweb</strong>
            <small className="text-xs tracking-widest text-gray-500">
              ADMIN WORKSPACE
            </small>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <span className="hidden text-sm text-gray-500 md:inline">
            {adminEmail}
          </span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-gray-100"
          >
            <LogOut size={17} />
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#c94f38]">
              <LayoutDashboard size={18} />
              Admin dashboard
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Good work starts here.
            </h1>
            <p className="mt-4 text-gray-600">
              Manage enquiries and keep good work moving.
            </p>
          </div>

          <button
            onClick={() => void loadEnquiries()}
            disabled={loading}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50 disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh enquiries
          </button>
        </div>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total enquiries", count: totalCount, icon: Inbox },
            { label: "New enquiries", count: newCount, icon: CircleDot },
            { label: "Contacted", count: contactedCount, icon: Mail },
            { label: "Closed", count: closedCount, icon: CheckCircle2 },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{card.label}</span>
                  <Icon size={21} className="text-[#c94f38]" />
                </div>
                <div className="text-4xl font-semibold">{card.count}</div>
              </div>
            );
          })}
        </section>

        {notice && (
          <p className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
            {notice}
          </p>
        )}

        {errorMessage && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          >
            {errorMessage}
          </div>
        )}

        <section className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="border-b border-black/10 px-6 py-6 md:px-8">
            <h2 className="text-xl font-semibold">Customer enquiries</h2>
            <p className="mt-2 text-sm text-gray-500">
              Messages submitted through your website contact form.
            </p>
          </div>

          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading enquiries...
            </div>
          ) : errorMessage ? (
            <div className="p-10 text-center text-gray-500">
              Enquiries are unavailable until the issue above is resolved.
            </div>
          ) : enquiries.length === 0 ? (
            <div className="p-10 text-center">
              <Inbox size={32} className="mx-auto mb-4 text-[#c94f38]" />
              <h3 className="text-lg font-semibold">No enquiries found</h3>
              <p className="mt-2 text-sm text-gray-500">
                New website submissions will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-black/10">
              {enquiries.map((enquiry) => (
                <article key={enquiry.id} className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {enquiry.name}
                      </h3>

                      <a
                        href={`mailto:${enquiry.email}`}
                        className="mt-2 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#c94f38]"
                      >
                        <Mail size={15} />
                        {enquiry.email}
                        <ExternalLink size={13} />
                      </a>

                      {enquiry.company && (
                        <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                          <Building2 size={15} />
                          {enquiry.company}
                        </p>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f5f0] px-3 py-2 text-xs font-semibold uppercase tracking-wide">
                      <Clock3 size={14} />
                      {enquiry.status}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="inline-block rounded-lg bg-[#c94f38]/10 px-3 py-2 text-sm font-medium text-[#a83c2a]">
                      {serviceLabels[enquiry.service] ?? enquiry.service}
                    </span>
                  </div>

                  <p className="mt-5 whitespace-pre-wrap break-words text-sm leading-7 text-gray-700">
                    {enquiry.message}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-5">
                    <span className="text-xs text-gray-500">
                      Submitted{" "}
                      {new Date(enquiry.created_at).toLocaleString()}
                    </span>

                    <label className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-gray-600">
                        Status
                      </span>
                      <select
                        value={enquiry.status}
                        disabled={updatingId === enquiry.id}
                        onChange={(event) =>
                          void handleStatusChange(
                            enquiry.id,
                            event.target.value as Enquiry["status"]
                          )
                        }
                        className="rounded-lg border border-black/15 bg-white px-3 py-2 disabled:opacity-50"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </label>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck size={15} />
          ETHIXWEB INDIA · PRIVATE ADMIN WORKSPACE
        </div>
      </div>
    </main>
  );
}