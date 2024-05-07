"use client";
import { Menu } from "lucide-react";
import Footer from "../sidebar/Footer";
import Navigation from "../sidebar/Navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Button size={"icon"} variant={"outline"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Navigation />
        <Footer />
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
