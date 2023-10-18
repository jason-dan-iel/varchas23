const Footer = () => {
  return (
    <div className="w-screen text-white flex sm:flex-row flex-col sm:gap-4 justify-evenly sm:h-fit p-3 footer-grad">
        <div className="hidden sm:flex  sm:w-1/4 justify-center items-center">
            <img src="./logo1.png" alt="" className="h-1/2"/>
        </div>
      <div className="flex flex-col sm:w-[25%] p-4 gap-1 font-serif">
        <p className="underline text-[1.5rem] font-mono">Varchas</p>
        <p>
          Indian Institute of Technology Jodhpur NH 62 Nagaur Road Karwar
          342030, Jodhpur District
        </p>
        <p>Phone:-</p>
        <ul className="pl-8 list-disc font-mono">
          <li>+91 7906458269 Harsh</li>
          <li>+91 8957247407 Utkarsh</li>
          <li>+91 8433106251 Shivangi</li>
          <li>+91 9326532412 Aradhya</li>
          <li>+91 9571076991 Harendra</li>
        </ul>
      </div>
      {/* <div className="flex flex-col justify-center items-center sm:w-[20%] border p-4">
        <p>Quick Links</p>
        <p>asdfads</p>
        <p>asdfads</p>
        <p>asdfads</p>
        <p>asdfads</p>
      </div> */}
      <div className="flex flex-col sm:w-[20%] p-4 gap-2">
        <p className="text-[1.5rem] underline font-mono">Socials</p>
        <a href="https://www.instagram.com/varchas_iitj/" className="cursor-pointer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fd5"></stop>
              <stop offset=".328" stopColor="#ff543f"></stop>
              <stop offset=".348" stopColor="#fc5245"></stop>
              <stop offset=".504" stopColor="#e64771"></stop>
              <stop offset=".643" stopColor="#d53e91"></stop>
              <stop offset=".761" stopColor="#cc39a4"></stop>
              <stop offset=".841" stopColor="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4168c9"></stop>
              <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
