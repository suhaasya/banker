type TransactionTypes = {
  children: number;
  transactionDate?: String | undefined;
  type: "deposite" | "withdraw";
};
function Transaction(props: TransactionTypes) {
  const { type, children, transactionDate } = props;
  return (
    <div className="bg-white flex items-center p-4 rounded-lg text-lg gap-4">
      <span
        className={`${
          type === "deposite" ? "bg-green" : "bg-red"
        }  px-4 rounded-full`}
      >
        {type}
      </span>
      <span>{transactionDate}</span>
      <span className="ml-auto">${children}</span>
    </div>
  );
}

export default Transaction;
