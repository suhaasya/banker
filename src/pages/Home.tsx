import { useEffect } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";

function Home() {
  const navigate = useNavigate();
  const loggedUser = useAppSelector((state) => state.user);

  useEffect(() => {
    if (loggedUser.interestRate === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
