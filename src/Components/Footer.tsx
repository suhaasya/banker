import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAccount } from "../features/userSlice";
import FooterMenu from "./FooterMenu";

function Footer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.data);
  const loggedUser = useAppSelector((state) => state.user);
  const user = accounts.find((acc) => acc.accountNo === loggedUser.accountNo);
  const { movements, interestRate = 1 } = user || {};

  const [time, setTime] = useState(5 * 60);

  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const totalIn = movements
    ?.filter((mov) => mov.amount > 0)
    .reduce((acc, mov) => mov.amount + acc, 0);

  const totalOut = movements
    ?.filter((mov) => mov.amount < 0)
    .reduce((acc, mov) => mov.amount + acc, 0);

  const totalInterest = movements
    ?.filter((mov) => mov.amount > 0)
    .map((deposite) => (deposite.amount * interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  if (time === 0) {
    dispatch(
      setAccount({
        accountNo: "",
        username: "",
        movements: [],
        interestRate: 0,
        password: "",
      })
    );
    navigate("/");
  }

  return (
    <footer className="xl:max-w-screen lg:w-5/6 lg:mx-auto w-full bg-gray px-8 py-4 mb-4 rounded-lg flex justify-between">
      <FooterMenu>
        <span>IN</span> <span className="text-2xl text-green">{totalIn}$</span>
      </FooterMenu>

      <FooterMenu>
        <span>OUT</span> <span className="text-2xl text-red">{totalOut}$</span>
      </FooterMenu>

      <FooterMenu>
        <span>IN</span>{" "}
        <span className="text-2xl text-green">{totalInterest}$</span>
      </FooterMenu>

      <FooterMenu>
        <span>
          You will be logged out in {min}:{sec}
        </span>
      </FooterMenu>
    </footer>
  );
}

export default Footer;
