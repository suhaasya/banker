import React, { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import Transaction from "./Transaction";
import { v4 as uuidv4 } from "uuid";

function TransactionSection() {
  const accounts = useAppSelector((state) => state.data);
  const loggedUser = useAppSelector((state) => state.user);
  const user = accounts.find((acc) => acc.accountNo === loggedUser.accountNo);
  const { movements } = user || {};

  return (
    <div className="lg:w-2/3 flex flex-col gap-2 h-[70vh] overflow-y-scroll w-full">
      {movements?.map((mov, i) => (
        <Transaction
          transactionDate={mov.date}
          type={mov.amount > 0 ? "deposite" : "withdraw"}
          key={uuidv4()}
        >
          {mov.amount}
        </Transaction>
      ))}
    </div>
  );
}

export default TransactionSection;
