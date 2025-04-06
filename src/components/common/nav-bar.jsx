import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "@/../public/logos.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center bg-black p-4">
      <Link
        href="/"
        className="flex items-baseline text-[2em] font-bold text-white"
      >
        <Image
          src={Logo}
          alt="company logo"
          width={70}
          className="inline-block"
        />
        hahTech
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/our-team" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Our Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
