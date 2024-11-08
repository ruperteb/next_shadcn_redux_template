import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getUser } from "@/lib/dal";
import Counter from "@/components/ui/complex/counter";

export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex flex-auto">
      <main className="flex h-full w-full flex-col">
        {!user?.id ? (
          <Card className="flex h-fit m-auto">
            <CardContent className="pt-6 ">
              <span className="self-center mr-2">
                Login to access page contents:
              </span>
              <Link href="/login" passHref legacyBehavior>
                <Button>Login</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full flex-col">
            <Card className="w-[300px] rounded-xl border bg-card text-card-foreground shadow max-w-sm m-auto mb-24">
              <CardTitle className="text-2xl pt-4 px-6 pb-2">Profile</CardTitle>
              <CardContent>
                <ul>
                  <li className="flex">
                    <span className="text-muted-foreground w-[100px]">
                      Name:
                    </span>
                    <span>{user?.name}</span>
                  </li>
                  <li className="flex">
                    <span className="text-muted-foreground w-[100px]">
                      Email:
                    </span>
                    <span>{user?.email}</span>
                  </li>
                  <li className="flex">
                    <span className="text-muted-foreground w-[100px]">
                      UserId:
                    </span>
                    <span>{user?.id}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Counter />
          </div>
        )}
      </main>
    </div>
  );
}
