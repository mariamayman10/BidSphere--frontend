import { useState } from "react";
import Btn from "../component/btn";
import { MdArrowBack } from "react-icons/md";

function SignUp() {
  const [type, setType] = useState("USER");

  function signup() {}
  return (
    <div className="min-h-screen auth-page flex justify-center items-center py-15 sm:px-10 px-5">
      <div className="flex items-center gap-1.5 border-b border-b-primary text-primary absolute top-5 left-5">
        <MdArrowBack />
        <a href="/home">Go Home</a>
      </div>
      <div className="flex flex-col items-center h-fit md:w-150 w-full pt-20 pb-10 sm:px-10 px-7 rounded-md bg-[#0000001f]">
        <img src="/images/logo.png" alt="logo" className="w-50" />
        <div className="w-full mt-10">
          <form onSubmit={signup}>
            <input type="text" placeholder="Name" className="mb-5" />
            <input type="email" placeholder="Email" className="mb-5" />
            <input type="text" placeholder="Phone Number" className="mb-5" />

            <input type="password" placeholder="Password" className="mb-5" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="mb-5"
            />
            <div className="flex items-center gap-5 mb-10">
              <p className="text-surface-500">Type</p>
              <div className="flex bg-surfacetonal-200 p-1 rounded-md w-fit">
                {["USER", "SELLER"].map((item) => (
                  <button
                    className={`px-5 py-1.5 rounded-sm text-surface-500 ${type === item ? "bg-primary" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setType(item);
                    }}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <Btn className="rounded-sm w-full text-light">Sign Up</Btn>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
