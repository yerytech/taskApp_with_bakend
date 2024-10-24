

import { Search } from "@components//Search";
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AddTask } from "@taskmeComponents//AddTask";
import { BodyPageContent } from "@taskmeComponents//BodyPageContent.tsx";

// import { BodyPageContent } from "@taskmeComponents//BodyPageContent.tsx";
import { FAB } from "@taskmeComponents//FAB";

export const DashBoardPage = () => {
  const menuItems = ["Profile", "Info", "LogOut"];
  return (
    <>
      <Navbar
        disableAnimation
        isBordered
        className=" bg-transparent"
      >
        <NavbarContent className="sm:hidden justify-start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu className="w-40">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item}>{item}</NavbarMenuItem>
          ))}
        </NavbarMenu>

        <div className="  flex-row hidden sm:block  ">
          {menuItems.map((item) => (
            <Link
              color="secondary"
              className="pl-32 text-xl"
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
        <Search />
      </Navbar>

      <BodyPageContent />
      {/* <AddTask /> */}
      <FAB />
    </>
  );
};