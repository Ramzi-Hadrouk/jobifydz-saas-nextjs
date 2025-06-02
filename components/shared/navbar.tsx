"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, Sheet, SheetTrigger, SheetContent } from "@/components/ui";
import { ModeToggle, Logo, LoginLogoutButton } from "@/components/shared";



//  -----SubComponent ---- Desktop Navigation Component
function DesktopNavigation({ navLinks }: { navLinks: { title: string; href: string }[] }) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary"
        >
          {link.title}
        </Link>
      ))}
      <LoginLogoutButton  />
      <ModeToggle />
    </nav>
  );
}

// -----SubComponent ----Mobile Navigation Component
function MobileNavigation({ navLinks }: { navLinks: { title: string; href: string }[] }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="grid grid-cols-1 align-middle p-10">
          <div className="flex flex-col space-y-4 mt-4">
            <ModeToggle />
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
            <LoginLogoutButton  />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}


// -----MainComponent ----Navbar
export  function Navbar() {
 

  const navLinks = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b h-[55px]">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Logo  />
        {/* Desktop Navigation */}
        <DesktopNavigation
          navLinks={navLinks}
 
        />
        {/* Mobile Navigation */}
        <MobileNavigation
          navLinks={navLinks}
    
        />
      </div>
    </header>
  );
}
