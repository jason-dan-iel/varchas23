const Discount = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black flex-col">
      <div className="flex flex-col font-mono justify-center  min-w-[60%] max-w-[80%] p-2 rounded-2xl h-[80%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10 text-white">
        <div className="uppercase flex items-center justify-center p-2 text-[1.5rem] sm:text-[2.5rem] font-mono">
          {" "}
          contingent leader
        </div>
        <div className="p-1 flex items-center justify-center font-serif text-[0.9rem] sm:text-[1.25rem]">
          We are offering you a FREE ACCOMODATION at IIT Jodhpur and a JODHPUR
          CITY tout to anyone who brings 20 accomodations to Varchs'23 Sports
          fest
        </div>
        <img src="/Vn.png" />
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
    </div>
  );
};

export default Discount;
