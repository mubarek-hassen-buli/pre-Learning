"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomerServiceModal from "./CustomerServiceModal";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  return (
    <div className="container flex h-16 items-center justify-between">
      <CustomerServiceModal open={isOpen} onOpenChange={setIsOpen} />
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-2xl ml-3"
      >
        {/* <BookOpen className="h-6 w-6" /> */}

        <Image src="/image/logo.png" alt="logo" width={54} height={32} />
        <span className="text-black">
          Hahu<span className="text-[#FFCC00]">Tech</span>
        </span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="/courses"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Courses
        </Link>
        <Link
          href="/jobs"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Jobs
        </Link>
        {/* <Link
        href="/teach"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
       Customer Service
      </Link> */}
        <button
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Customer Service
        </button>
        {/* <Link
          href="/teach"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Teach
        </Link> */}
        <Link
          href="/about"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          About
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/login">
          <Button variant="outline" size="sm">
            Log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
