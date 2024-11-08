"use server";
import { LoginFormSchema, FormState } from "@/lib/definitions";
import { /* hash, */ compare } from "bcryptjs";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import db from "@/lib/db";

export async function login(state: FormState, formData: FormData) {
  // Initialise mock db if not already created
  /*   if (!db) {
    const mockPassword = "password@123";
    const hashedPassword = await hash(mockPassword, 10);
    const initialUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@abc.com",
        password: hashedPassword,
      },
    ];
    db = new DB(initialUsers);
  } */

  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Simulate a network delay for the API request
  const sleep = () => {
    return new Promise((res) => {
      setTimeout(res, 500);
    });
  };

  await sleep();

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      email: formData.get("email") as string,
      password: formData.get("password") as string,

      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract the form data
  const { email, password } = validatedFields.data;

  // Obtain the correct user

  const user = db?.getUserByEmail(email);

  // Return messages if user does not exist or password does not match
  if (!user) {
    return {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      message: "This user does not exist.",
    };
  }

  if (!(await compare(password, user.password))) {
    return {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      message: "This password is invalid.",
    };
  }

  //  Create user session
  await createSession(user.id);
  //  Redirect user
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
