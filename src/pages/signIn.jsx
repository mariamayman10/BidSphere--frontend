import Btn from "../component/btn";
import { MdArrowBack } from "react-icons/md";

function SignIn() {
  function signin() {}
  return (
    <div className="relative min-h-screen auth-page flex justify-center items-center py-10 sm:px-10 px-5">
      <div className="flex items-center gap-1.5 border-b border-b-primary text-primary absolute top-5 left-5">
        <MdArrowBack />
        <a href="/home">Go Home</a>
      </div>
      <div className="flex flex-col items-center h-fit md:w-150 w-full py-20 sm:px-10 px-7 rounded-2xl bg-[#0000001f]">
        <img src="/images/logo.png" alt="logo" className="w-50" />
        <div className="w-full mt-10">
          <form onSubmit={signin}>
            <input type="email" placeholder="Email" className="mb-5" />
            <input type="password" placeholder="Password" className="mb-10" />
            <Btn className="rounded-3xl w-full text-light">Sign In</Btn>
          </form>
        </div>
        <div className="mt-7">
          <span className="text-light">New to BidSphere?&nbsp;</span>
          <a href="/auth/signup" className="text-primary underline text-center">
            Create New Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
