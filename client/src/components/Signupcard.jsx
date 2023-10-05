import { useState } from "react";
import { signupFields } from "../constants";
import Input from "./input";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signupcard() {
  const [disabled, setDisabled] = useState(false);
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log(signupState);
    const configuration = {
      method: "post",
      url: "https://api.varchas23.in/account/userregister/",
      data: signupState,
    };
    axios(configuration)
      .then((result) => {
        const jsondata = { success: "Signed Up Successfully" };
        alert(jsondata.success);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.Error);
      });
  };

  return (
    <form className="mt-4 space-y-6 w-72 xl:w-96" onSubmit={handleSubmit}>
      <div className="-space-y-px ">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            pattern={field.pattern}
            options={field.options}
          />
        ))}

        <div className="text-[#a2c288] ">
          <div>
            <br />
            <h5>Undertaking :</h5>
            <ul className="list-disc pl-2 ">
              <li>
                Indian Institute of Technology, Jodhpur and its students are not
                responsible for any mishappening that may or may not occur
                during my visit to Varchas Winter 2022.
              </li>
              <li>
                I will not inflict any damage on any object present in the
                accomodation facilities.
              </li>
              <li>
                I will not indulge in any physical and/or verbal fights which
                may or may not happen during my visit to Varchas Winter 2022
              </li>
              <li>
                I will not administer or consume any type of alcholic and/or
                narcotic substances.
              </li>
              <li>
                I will behave in a respectful and responsible manner towards
                everyone during my visit to Varchas Winter 2022.
              </li>
              <li>
                I will not invite anyone to my particular accomodation alloted
                to me who is not documented for their stay in the same
                accomodation.
              </li>
              <li>
                I will bring original college identity proof along with a valid
                Aadhar Card, which is mandatory for all the participants. Along
                with this our captain has to get a signed statement from the
                college having our details.
              </li>
            </ul>
            If I am found breaking or not complying with any of the above
            mentioned guidelines, I am bound for fine by the authority of the
            organizing committee or any disciplinary action committee wants to
            take against me, Varchas Winter 2022.
          </div>
          <div className="font-bold font-mono italic mb-2 underline">
            I have read and accept the terms :{" "}
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={disabled}
              onClick={(e)=> setDisabled(e.target.checked)}
            />
          </div>
        </div>

        <button
          type={"submit"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
          disabled = {!disabled}
        >
          Signup
        </button>
      </div>
    </form>
  );
}
