import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../logo";
import Btn from "../btn";
import { FaUser } from "react-icons/fa";
import { LiaAngleDownSolid } from "react-icons/lia";
import DropdownCol from "./dropdownCol";
import ProfileDropdown from "./profileDropdown";

const categories = [
  "Antiques",
  "Vehicles",
  "Apartments",
  "Cameras",
  "Watches",
  "Laptops",
  "Mobiles",
];
const status = ["Upcoming", "Live", "Ended"];

function MainNav({ className }) {
  const userToken = useSelector((store) => store.user.token);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");
  const statusParam = params.get("status");

  return (
    <nav
      className={`${className} md:px-10 px-6 py-5 rounded-bl-2xl rounded-br-2xl`}
    >
      <div className="nav-container flex justify-between items-center relative">
        <Logo />
        <div className="flex items-center center absolute left-1/2 -translate-x-1/2 ">
          <NavLink to="home" className="md:mr-8 mr-5">
            Home
          </NavLink>
          <div className="group relative md:mr-8 mr-5">
            <NavLink to="auctions" end>
              <div className=" flex gap-1.5 items-center">
                <p>Auctions</p>
                <LiaAngleDownSolid
                  className={`transition-transform duration-200 group-hover:rotate-180`}
                  size={14}
                />
              </div>
            </NavLink>

            <div className="hidden group-hover:flex p-7 md:gap-5 gap-4 text-light bg-surface-100 rounded-3xl absolute top-7">
              <div className="md:w-50 w-35">
                <DropdownCol
                  arr={categories}
                  param="Category"
                  paramValue={categoryParam}
                />
              </div>
              <div className="md:w-50 w-35">
                <DropdownCol
                  arr={status}
                  param="Status"
                  paramValue={statusParam}
                />
              </div>
            </div>
          </div>
          <NavLink to="faq">FAQ</NavLink>
        </div>
        <div className="right">
          {userToken ? (
            <div className="group relative cursor-pointer">
              <div>
                <FaUser className="text-primary" size={17} />
              </div>
              <div className="hidden group-hover:flex flex-col absolute top-4 right-0 w-25 text-left">
                <ProfileDropdown />
              </div>
            </div>
          ) : (
            <Btn>Sign In</Btn>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
