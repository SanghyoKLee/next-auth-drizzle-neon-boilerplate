"use server";

import { db } from "@/db/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(
  _prev: string | null,
  formData: FormData,
): Promise<string | null> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const password = (formData.get("password") as string | null) ?? "";

  if (!name || !email || !password) {
    return "All fields are required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  const existing = await db
    .select({ id: usersTable.id })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (existing.length > 0) {
    return "An account with that email already exists.";
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await db.insert(usersTable).values({ name, email, passwordHash });

  redirect("/signin");
}
