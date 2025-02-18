import { CreateBlogForm } from "./create-blog-form";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { ArrowLeft } from "lucide-react";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Blog | GambleGone",
  openGraph: {
    ...openGraphTemplate,
    title: "Create Blog | GambleGone",
  },
  twitter: {
    ...twitterTemplate,
    title: "Create Blog | GambleGone",
  },
};

export default async function CreateBlogPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-24">
      <section className="flex w-full max-w-7xl flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col gap-2">
          {/* Back */}
          <Link
            href="/my-blog"
            className="flex flex-row items-center gap-2 text-primary-purple"
          >
            <ArrowLeft className="size-5 stroke-[3]" />
            <span className="text-lg font-extrabold uppercase">Back</span>
          </Link>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-primary-black">
            Make a new Blog
          </h1>
        </header>

        {/* Form */}
        <CreateBlogForm />
      </section>
    </main>
  );
}
