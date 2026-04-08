import { Link } from "react-router-dom";
import Logo from './logo'
import { useSelector } from "react-redux";

function Footer() {
  const token = useSelector((store) => store.user.token);
  return (
    <footer className="bg-surface-100 text-light mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 grid-cols-2 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-light/70">Bid. Win. Own.</p>
        </div>

        <div>
          <h3 className="text-primary mb-3 font-semibold">Auctions</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/auctions?status=live">Live Auctions</Link>
            <Link to="/auctions?status=upcoming">Upcoming</Link>
            <Link to="/auctions">All Auctions</Link>
          </div>
        </div>

        <div>
          <h3 className="text-primary mb-3 font-semibold">Company</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>

        <div>
          <h3 className="text-primary mb-3 font-semibold">Account</h3>
          <div className="flex flex-col gap-2 text-sm">
            {token ? (
              <>
                <Link to="/me">Profile</Link>
                <Link to="/bids/me">My Bids</Link>
                <Link to="/auctions/me">My Auctions</Link>
              </>
            ) : (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-surface-500 text-center py-4 text-sm text-light/60">
        &copy; {new Date().getFullYear()} BidSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
