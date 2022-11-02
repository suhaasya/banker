import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { setAccount } from "../features/userSlice";

type LoginDataTypes = {
  username: String;
  password: String;
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.data);

  const [loginData, setLoginData] = useState<LoginDataTypes>({
    username: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick() {
    const userAccount = accounts.find(
      (acc) => acc.username === loginData.username
    );
    if (userAccount) {
      dispatch(setAccount({ ...userAccount }));
      navigate("/home");
    } else {
      window.alert("user doesnt exist");
    }
  }

  return (
    <section className="h-screen flex items-center">
      <div className="container max-w-screen-sm mx-auto p-[1%] sm:px-[5%]">
        <div className="text-center">
          <p>
            <span className="font-bold">
              Test Accounts: <br />
            </span>
            <span className="font-bold">username:</span>
            demo <span className="font-bold">password:</span>
            demo@123 <br />
            <span className="font-bold"> username: </span> test{" "}
            <span className="font-bold"> password:</span> test@123
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-gray p-8 rounded-lg">
          <h3>Login</h3>
          <Input
            placeholder="username"
            name="username"
            type={"text"}
            onChange={handleChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button hoverColor="blue" onClick={handleClick}>
            Login
          </Button>
          <p>
            Don't have account?
            <Link to={"/signup"}>
              <span className="text-blue"> Create one here</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
