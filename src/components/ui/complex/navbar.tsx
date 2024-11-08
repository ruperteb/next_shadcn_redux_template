"use server";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../separator";
import { Button } from "../button";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRoundPen, LogOut } from "lucide-react";
import { logout } from "@/app/actions/auth";
import { getUser } from "@/lib/dal";

const Navbar = async () => {
  const user = await getUser();
  const firstLetters = user?.name.match(/\b(\w)/g);
  const fallback = firstLetters ? firstLetters.join("") : "JD";

  return (
    <nav className="w-full flex flex-col">
      <div className="grid grid-flow-row grid-cols-3">
        <div className="flex justify-center h-24 col-start-2">
          <Image
            alt="Next Logo"
            src="/next.svg"
            width={180}
            height={38}
            className="h-10 w-auto self-center"
          />
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl h-fit self-center mx-2">
            +
          </h1>
          <Image
            alt="shadcn Logo"
            src="/shadcn.svg"
            width={38}
            height={38}
            className="h-10 w-auto self-center"
          />
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl h-fit self-center">
            shadcn
          </h1>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl h-fit self-center mx-2">
            +
          </h1>
          <Image
            alt="Redux Logo"
            src="/redux.svg"
            width={48}
            height={48}
            className="h-12 self-center"
          />
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl h-fit self-center">
            Redux
          </h1>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl h-fit self-center ml-2">
            Template
          </h1>
        </div>
        <div className="flex justify-end pr-16">
          {!user?.id ? (
            <Link href="/login" passHref legacyBehavior>
              <Button className="self-center">Login</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="self-center hover:cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:cursor-pointer">
                  <UserRoundPen />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={logout}
                >
                  <LogOut />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
