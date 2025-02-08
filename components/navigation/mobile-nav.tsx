import { MenuIcon } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
   return (
      <nav className="flex justify-between">
         <Link href={"/"}></Link>
         <button className="text-primary"><MenuIcon size={24} /></button>
      </nav>
   );
};

export default MobileNav;