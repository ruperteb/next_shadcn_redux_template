import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { cache } from "react";
import { SessionPayload } from "./definitions";
import db from "./db";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) {
    return { isAuth: false, userId: undefined };
  }
  const session = (await decrypt(cookie)) as SessionPayload;

  if (!session?.userId) {
    return { isAuth: false, userId: undefined };
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session?.userId) return undefined;

  const user = db?.getUserById(session.userId);

  return user;
});
