"use client";

import { useActionState } from "react";
import { register } from "@/app/actions/auth";
import Link from "next/link";

export default function RegisterPage() {
  const [error, action, isPending] = useActionState(register, null);

  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center tracking-tight">
          Create account
        </h1>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 text-center dark:bg-red-950 dark:text-red-400">
            {error}
          </p>
        )}

        <form action={action} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isPending ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="text-sm text-center text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
