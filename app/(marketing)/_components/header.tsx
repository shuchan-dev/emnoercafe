import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  AlignLeft,
  BookOpenText,
  CircleUserRound,
  FileCheck2,
  HomeIcon,
  SquareUserRound,
} from "lucide-react";
import Link from "next/link";
import { Cart } from "./Cart";

const Header = () => {
  return (
    <div className="bg-primary">
      <Menubar className="container bg-primary justify-between">
        <MenubarMenu>
          <MenubarTrigger>
            <AlignLeft className="text-teal-300 cursor-pointer" />
          </MenubarTrigger>
          <MenubarContent className="bg-primary text-white border-emerald-500">
            <Link href="/">
              <MenubarItem className="cursor-pointer">
                Home
                <MenubarShortcut>
                  <HomeIcon className="text-emerald-500" />
                </MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/menu">
              <MenubarItem className="cursor-pointer">
                Menu
                <MenubarShortcut>
                  <BookOpenText className="text-emerald-500" />
                </MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/order">
              <MenubarItem className="cursor-pointer">
                Pesanan
                <MenubarShortcut>
                  <FileCheck2 className="text-emerald-500" />
                </MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/about">
              <MenubarItem className="cursor-pointer">
                Kontak
                <MenubarShortcut>
                  <SquareUserRound className="text-emerald-500" />
                </MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/login">
              <MenubarItem className="cursor-pointer">
                Login
                <MenubarShortcut>
                  <CircleUserRound className="text-emerald-500" />
                  {/* <LogOut /> */}
                </MenubarShortcut>
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <h2 className="text-teal-300 font-bold text-xl">
          <a href="/">Emnoer Cafe</a>
        </h2>
        <div>
          <Cart />
        </div>
      </Menubar>
      <MenubarSeparator className="mx-auto" />
    </div>
  );
};
export default Header;
