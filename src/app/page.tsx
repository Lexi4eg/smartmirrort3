import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Dashboard from "~/app/_components/Dashboard";
import {signOut} from "next-auth/react";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
      <main className="flex bg-cover max-w-screen min-h-screen bg-center flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{ backgroundImage: "url('/porsche.jpg')" }}>
        {session ? (
            <>
                <Dashboard/>
            </>

        ) : (
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              <p className="text-2xl text-white">Please log in to access the dashboard.</p>
              <Link
                  href="/api/auth/signin"
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                Sign in
              </Link>
            </div>
        )}
      </main>
  );
}

