import React from "react";
import OperationSection from "./OperationSection";
import TransactionSection from "./TransactionSection";

function Main() {
  return (
    <section className="xl:max-w-screen lg:w-5/6 lg:mx-auto w-full my-4 bg-gray px-8 py-4 rounded-lg flex flex-col lg:flex-row gap-8 ">
      <TransactionSection />
      <OperationSection />
    </section>
  );
}

export default Main;
