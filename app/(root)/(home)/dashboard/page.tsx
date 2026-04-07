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
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black ">
      <Header />
      <main className="mx-auto max-w-5xl w-full px-6 py-10 mb-499 ">
        <p className="text-zinc-500 dark:text-zinc-400">
          Your decks will appear here.
        </p>
      </main>
    </div>
  );
}
