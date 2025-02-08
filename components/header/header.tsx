import Link from "next/link";
import MobileNav from "../navigation/mobile-nav";

const Header = () => {
   return (
      <header className="bg-primary-foreground p-4 mx-4">
         <Link href={"/"}></Link>
         <MobileNav />
      </header>
   );
};

export default Header;