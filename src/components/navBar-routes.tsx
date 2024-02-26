"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathName = usePathname();
  const router = useRouter();

  const isTeacherPage = pathName?.startsWith("/teacher");
  const isPlayerPage = pathName.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (

        <Link href='/'>
            <Button size="medium" variant="outlined">
              <LogOut  />
              Exit
            </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="medium" variant="outlined">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton 
      afterSignOutUrl="/"
      />
    </div>
  );
};
