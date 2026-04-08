import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/navbar';
import Footer from './component/footer';
import Home from './pages/home';
import FAQ from './pages/faq';
import Profile from './pages/profile';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Auctions from './pages/auctions';
import CreateAuction from "./pages/createAuction";
import AuctionDetails from "./pages/auctionDetails";
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="auctions" element={<Auctions />} />
        <Route path="auction">
          <Route path="create" element={<CreateAuction />} />
          <Route path=":id" element={<AuctionDetails />} />
        </Route>
        <Route path="faq" element={<FAQ />} />
        <Route path="me" element={<Profile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
