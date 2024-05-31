import React, { useEffect } from "react";
import User from "./user/user";

const TransactionUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Transaction User";
  }, []);

  const content = (
    <>
      <div className="flex text-primaryBlue font-semibold ">
        Transaction
      </div>
    </>
  );

  return <User content={content} />;
};

export default TransactionUserPage;
