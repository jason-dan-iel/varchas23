import { Link } from "react-router-dom";
import { logos } from "../assets";

const Login = () => {
  return (
    <section>
    <div className="flex justify-center ">
      <img alt="" className="h-14 w-14 mt-48" src={logos} />
    </div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
      Login to your Account
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      {"Don't have an account yet"}{" "}
      <Link
        to={"/signup"}
        className="font-medium text-purple-600 hover:text-purple-500"
      >
        {"Signup"}
      </Link>
    </p>
  </section>
  )
};

export default Login;
