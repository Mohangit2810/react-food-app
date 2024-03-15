import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <form className="form mb-5" onSubmit={submitHandler}>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  ref={loginNameRef}
                  className="w-full px-4 py-2 mb-3 border rounded-md"
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={loginPasswordRef}
                  className="w-full px-4 py-2 mb-3 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="addTOCart__btn bg-orange-600 w-1/6"
              >
                Login
              </button>
            </form>
            <Link to="/register" className="block">
              Don&apos;t have an account? Create an account by clicking{" "}
              <span className="text-red-500">here</span>
            </Link>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
