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
  localStorage.setItem("accounts", JSON.stringify(accounts));

  console.log(accounts);
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
    <div className="xl:max-w-screen lg:w-1/5 lg:mx-auto w-full h-screen flex items-center ">
      <div className="flex flex-col gap-4 bg-gray p-8 rounded-lg">
        <h3>Login</h3>
        <Input placeholder="username" name="username" onChange={handleChange} />
        <Input placeholder="password" name="password" onChange={handleChange} />
        <Button hoverColor="blue" onClick={handleClick}>
          Login
        </Button>
        <p>
          Don't have account?
          <Link to={"/signup"}>
            <span> Create one here</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
