import MobileNav from './mobileNav';
import MainNav from './mainNav';


function Navbar() {
  return (
    <header>
      <MobileNav className="block sm:hidden" />
      <MainNav className="hidden sm:block" />
    </header>
  );
}

export default Navbar;
