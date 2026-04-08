import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo";
import Btn from "../btn";
import { HiBars4 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
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

function MobileNav({ className }) {
  const [open, setOpen] = useState(false);
  const [showAuctions, setShowAuctions] = useState(false);
  const userToken = "d";
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");
  const statusParam = params.get("status");
  const navigate = useNavigate();

  return (
    <nav className={`${className} px-6 py-5`}>
      <div className="flex justify-between items-center">
        <Logo />
        <HiBars4
          className="text-primary cursor-pointer"
          size={28}
          onClick={() => setOpen(true)}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full overflow-y-scroll w-72 bg-surface-100 z-50 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <IoClose
            size={24}
            className="cursor-pointer text-primary"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-4">
          <NavLink to="home" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <div>
            <NavLink
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowAuctions((prev) => !prev)}
              end
              to="auctions"
            >
              <span>Auctions</span>
              {showAuctions ? (
                <FaMinus className="transition-transform duration-300" />
              ) : (
                <FaPlus />
              )}
            </NavLink>

            {showAuctions && (
              <div className="mt-3 ml-3 flex flex-col gap-3 transition-transform duration-300">
                <div>
                  <DropdownCol
                    arr={categories}
                    param="Category"
                    paramValue={categoryParam}
                  />
                </div>
                <div>
                  <DropdownCol
                    arr={status}
                    param="Status"
                    paramValue={statusParam}
                  />
                </div>
              </div>
            )}
          </div>

          <NavLink to="faq" onClick={() => setOpen(false)}>
            FAQ
          </NavLink>
        </div>
        <div className="w-full h-px bg-surface-200 my-3"></div>
        <div>
          {userToken ? (
            <div className="flex flex-col gap-3">
              <ProfileDropdown onClick={() => setOpen(false)} mobile={true} />
            </div>
          ) : (
            <Btn onClick={() => navigate("auth/signin")}>Sign In</Btn>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
