import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { clearUser } from "../../store/userSlice";
import Btn from "../btn";

const profile = [
  { name: "Profile", route: "me" },
  { name: "My Bids", route: "bids/me" },
  { name: "My Auctions", route: "auctions/me" },
  "Logout",
];

function ProfileDropdown({onClick=null, mobile=false}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user");
    dispatch(clearUser());
    navigate("/home", { replace: true });
  }
  return (
    <>
      {profile.map((p) => {
        if (p === "Logout") {
          return mobile ? (
            <Btn>Logout</Btn>
          ) : (
            <button onClick={logout} className="">
              {p}
            </button>
          );
        }
        return <NavLink to={p.route} onClick={onClick}>{p.name}</NavLink>;
      })}
    </>
  );
}

export default ProfileDropdown;
