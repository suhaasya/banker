import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { v4 as uuidv4 } from "uuid";
import { createAccount } from "../features/dataSlice";
import getDate from "../utils/getDate";

type FormDataTypes = {
  username?: String;
  password?: String;
  confirmPassword?: String;
};

function SignUp() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormDataTypes>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleClick() {
    if (formData?.password === formData?.confirmPassword) {
      dispatch(
        createAccount({
          accountNo: uuidv4(),
          username: formData?.username,
          movements: [{ amount: 500, date: getDate() }],
          interestRate: 1.2,
          password: formData?.confirmPassword,
        })
      );
    } else {
      window.alert("password doesnt match");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="h-screen flex items-center">
      <div className="container max-w-screen-sm mx-auto p-[1%] sm:px-[5%]">
        <div className="flex flex-col gap-4 bg-gray p-8 rounded-lg">
          <h3>Sign up</h3>
          <Input
            placeholder="username"
            name="username"
            type={"text"}
            onChange={handleChange}
          />
          <Input
            placeholder="password"
            name="password"
            type={"password"}
            onChange={handleChange}
          />
          <Input
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            type={"password"}
          />
          <Button onClick={handleClick} hoverColor="blue">
            sign up
          </Button>
          <p>
            Already have account?
            <Link to={"/"}>
              <span className="text-blue">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
