import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/authLayout';
import MainLayout from "./layouts/mainLayout";

import Home from './pages/home';
import FAQ from './pages/faq';
import Profile from './pages/profile';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Auctions from './pages/auctions';
import CreateAuction from "./pages/createAuction";
import AuctionDetails from "./pages/auctionDetails";
import './App.css'
import NotFound from './pages/notFound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="" element={<Navigate to='/home' replace/>} />
          <Route path="home" element={<Home />} />
          <Route path="auctions" element={<Auctions />} />
          <Route path="auction">
            <Route path="create" element={<CreateAuction />} />
            <Route path=":id" element={<AuctionDetails />} />
          </Route>
          <Route path="faq" element={<FAQ />} />
          <Route path="me" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
