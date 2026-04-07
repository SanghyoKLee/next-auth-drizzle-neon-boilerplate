import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Header from "../Header";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <Header />
      {/* <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {session.user?.name}
          </span>
        </div>
      </header> */}

      <main className="mx-auto max-w-5xl w-full px-6 py-10">
        <p className="text-zinc-500 dark:text-zinc-400">
          Your decks will appear here.
        </p>
      </main>
    </div>
  );
}
