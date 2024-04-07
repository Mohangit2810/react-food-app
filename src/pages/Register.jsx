import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <div className="container mx-auto">
          <div className="text-center">
            <form className="form mb-5" onSubmit={submitHandler}>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  ref={signupNameRef}
                  className="w-full px-4 py-2 mb-3 border rounded-md"
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  ref={signupEmailRef}
                  className="w-full px-4 py-2 mb-3 border rounded-md"
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={signupPasswordRef}
                  className="w-full px-4 py-2 mb-3 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="addTOCart__btn bg-orange-600 w-1/3  md:w-1/6"
              >
                Sign Up
              </button>
            </form>
            <Link to="/login" className="block">
              Already have an account?{" "}
              <span className="text-red-500">Login</span>
            </Link>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Register;
