import { CB } from "../assets";

const Sponsors = () => {
  return (
    <section className="py-base container relative w-full h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl justify-center items-center">
      {/* <Comingsoon /> */}
      <div className=" text-emerald-400 text-center uppercase my-12 he">
        Past Sponsors
      </div>
      <div className="">
        <span className="w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={CB} />
          </div>
        </span>
      </div>
    </section>
  );
};

export default Sponsors;
