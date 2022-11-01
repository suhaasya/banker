import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import {
  deleteAccount,
  requestLoan,
  transferMoney,
} from "../features/dataSlice";
import { useNavigate } from "react-router-dom";

type OperationDataTypes = {
  amount: number;
  benAccount: string;
  loanAmount: number;
  confirmAccountNo: string;
  confirmPassword: string;
};

function OperationSection() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const accounts = useAppSelector((state) => state.data);

  const [operationData, setOperationData] = useState<OperationDataTypes>({
    amount: 0,
    benAccount: "",
    loanAmount: 0,
    confirmAccountNo: "",
    confirmPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setOperationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function setDefaultValues() {
    setOperationData({
      amount: 0,
      benAccount: "",
      loanAmount: 0,
      confirmAccountNo: "",
      confirmPassword: "",
    });
  }

  function transferMoneyToFriend() {
    if (operationData.amount > 0 && operationData.benAccount) {
      if (accounts.some((acc) => acc.accountNo === operationData.benAccount)) {
        dispatch(
          transferMoney({
            amount: operationData.amount,
            benAccount: operationData.benAccount,
            userAccount: user.accountNo,
          })
        );

        setDefaultValues();
      } else {
        window.alert("Accound does exists");
      }
    } else {
      window.alert("Amount or Benificiarry Account is not given");
    }
  }

  function takeLoan() {
    dispatch(
      requestLoan({
        amount: operationData.loanAmount,
        userAccount: user.accountNo,
      })
    );

    setDefaultValues();
  }

  function accountDelete() {
    const condition =
      operationData.confirmAccountNo === user.accountNo &&
      operationData.confirmPassword === user.password;

    if (condition) {
      dispatch(
        deleteAccount({
          userAccount: operationData.confirmAccountNo,
          userPassword: operationData.confirmPassword,
        })
      );
      setDefaultValues();
      navigate("/");
    } else {
      window.alert("something is wrong");
    }
  }

  return (
    <div className="flex flex-col justify-between gap-2">
      <Card>
        <h3 className="text-left text-xl font-bold">Transfer Money</h3>
        <div className="flex justify-between  gap-2">
          <Input
            placeholder="account no."
            name="benAccount"
            value={operationData.benAccount}
            onChange={handleChange}
            type="text"
          />
          <Input
            placeholder="amount"
            name="amount"
            type={"number"}
            value={operationData.amount}
            onChange={handleChange}
          />
        </div>
        <Button hoverColor="blue" onClick={transferMoneyToFriend}>
          Transfer
        </Button>
      </Card>

      <Card>
        <h3 className="text-left text-xl font-bold">Request Loan</h3>
        <Input
          placeholder="amount"
          name="loanAmount"
          value={operationData.loanAmount}
          type="number"
          onChange={handleChange}
        />
        <Button hoverColor="green" onClick={takeLoan}>
          Submit
        </Button>
      </Card>

      <Card>
        <h3 className="text-left text-xl font-bold">Delete Account</h3>
        <div className="flex justify-between gap-2">
          <Input
            type="text"
            className="bg-gray"
            value={operationData.confirmAccountNo}
            placeholder="confirm accountNo"
            name="confirmAccountNo"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="confirmPassword"
            value={operationData.confirmPassword}
            className="bg-gray"
            placeholder="confirm password"
            onChange={handleChange}
          />
        </div>
        <Button hoverColor="red" onClick={accountDelete}>
          delete account
        </Button>
      </Card>
    </div>
  );
}

export default OperationSection;
