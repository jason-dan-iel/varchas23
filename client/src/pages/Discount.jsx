import { useState } from "react";
const Discount = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center bg-black flex-col">
      <div className="flex flex-col font-mono justify-evenly  min-w-[60%] max-w-[80%] p-4 rounded-2xl h-[80%] text-white border">
        <div className="uppercase flex p-2 text-[1.5rem] sm:text-[2.5rem] font-mono">
          {" "}
          contingent leader
        </div>
        <div className="flex justify-between px-[10rem]">
          <div className="flex flex-col gap-2">
            <button className="bg-blue-400 text-center p-4 text-[0.75rem]" onClick={() => {setToggle(false)}}>Contingent Leader</button>
            <button className="bg-blue-400 text-center p-4 text-[0.75rem]" onClick={() => {setToggle(true)}}>Bulk Discount</button>
          </div>
          {!toggle?
          (
          <div className=" w-1/2 border h-[80%] overflow-auto p-2">
            <div className="p-1 flex items-center justify-center font-serif text-[0.9rem] sm:text-[1.25rem]">
              We are offering you a FREE ACCOMODATION at IIT Jodhpur and a
              JODHPUR CITY tour to anyone who brings 20 accomodations to
              Varchs'23 Sports fest
            </div>
            <div className="">
              <ul className="list-disc text-left px-5 ">
                <li> adfasdf </li>
                <li> adfasdf </li>
                <li> adfasdf </li>
                <li> adfasdf </li>
                <li> adfasdf </li>
              </ul>
            </div>
          </div>
          ) : (
            <div className="w-1/2 border h-[80%] overflow-auto p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis unde sed nisi optio iure delectus harum, in, amet molestiae debitis a? Culpa vero debitis cupiditate eos fugit aliquid corporis enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit dolorem magni odio repellendus! Voluptas voluptates magni ut asperiores nobis accusamus sunt adipisci recusandae! Quibusdam harum optio nobis quod ducimus.
            </div>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Discount;
