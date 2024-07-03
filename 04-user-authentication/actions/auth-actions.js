"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  //retrieving data from the forms
  const email = formData.get("email");
  const password = formData.get("password");

  //for validating data here I'm using errors object
  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter valid email address";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must contain atleast 8 characters";
  }
  //writing  this above code here won't do anything.
  //we need to pass this object to our frontend to our form & o/p their

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }

  //need to store the data
  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: { email: "Email already exists" },
      };
    }
    throw error;
  }
}
