import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import FormAction from "../components/formaction";

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

const TeamJoin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-300 overflow-auto max-h-[70%] w-fit h-fit shadow shadow-[#09fbd3]">
        <Header heading="Join Team" logoUrl={"/VLW.png"} />
        <form className="mt-4 space-y-6 w-96">
          <div className="">
            <div>
              <input
                // onChange={handleChange}
                // value={value}
                // id={id}
                // name={name}
                // type={type}
                // required={isRequired}
                className={fixedInputClass}
                placeholder={"Enter Team ID"}
              />
            </div>
            <FormAction 
            // handleSubmit={handleSubmit} 
            text="Join" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeamJoin;
