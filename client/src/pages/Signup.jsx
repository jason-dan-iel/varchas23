import Header from "../components/header";
import Signupcard from "../components/Signupcard";
const Signup = () => {
  return (
    <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center p-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-300 overflow-auto max-h-[70%] w-fit h-fit shadow shadow-[#09fbd3]">
            
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
          logoUrl={"/VLW.png"}
          />
        <Signupcard />
          </div>
    </section>
  );
};

export default Signup;
