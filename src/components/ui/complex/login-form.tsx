"use client";
import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../label";
import { Card, CardTitle, CardDescription, CardContent } from "../card";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow mx-auto max-w-sm m-auto">
      <CardTitle className="pt-4 px-6 pb-2">Login</CardTitle>
      <CardDescription className="px-6 pb-6">
        Enter your email below to login to your account
      </CardDescription>
      <CardContent>
        <form action={formAction} className="grid gap-4">
          <div>
            <Label htmlFor="email" className="pb-2">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@abc.com"
              defaultValue={state?.email}
            />
            {state?.errors?.email && (
              <p className="text-destructive">{state.errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password" className="pb-2">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              defaultValue={state?.password}
            />
            {state?.errors?.password && (
              <div className="text-destructive pt-2">
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {state?.message && (
            <p className="text-destructive">{state.message}</p>
          )}
          <Button type="submit" disabled={isPending}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
