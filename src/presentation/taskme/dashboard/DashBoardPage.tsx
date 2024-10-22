

import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import { BodyPageContent } from "@taskmeComponents//BodyPageContent.tsx";
import { FAB } from "@taskmeComponents//FAB";





export const DashBoardPage = 
  () => {
    const menuItems = ['Personal', 'Design', 'DevelopMent', 'Profile','LogOut']
  return (
    <>
      <Navbar
        disableAnimation
        isBordered
        className="h-min"
      >
        <NavbarContent className="sm:hidden justify-start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu className="w-40">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item}>{item}</NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
       <BodyPageContent/>
      
      <FAB/>
      {/* <Search/> */}
    </>
  );
}