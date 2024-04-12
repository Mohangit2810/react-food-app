import logo from "../../assets/images/logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EE4B2B] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-start">
            <img src={logo} alt="logo" className="w-32 mb-4" />
            <h5 className="text-lg font-bold mb-6">Feastify</h5>
            <p className="text-sm">
              Order food from your favorite restaurants with the Feastify app.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Delivery Time</h5>
            <ul>
              <li className="mb-4">
                <span className="font-bold">Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </li>
              <li>
                <span className="font-bold">Friday - Saturday</span>
                <p>Off day</p>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Contact</h5>
            <ul>
              <li className="mb-2">Location: O Block, New York-2343, USA</li>
              <li className="mb-2">Phone: +12 3456789009</li>
              <li>Email: example@gmail.com</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                name="newsletter_email"
                className="w-full text-black py-2 px-3 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <p className="text-sm">
            Copyright - 2077, website made by Satou Kazuma. All Rights are not
            Reserved.
          </p>
          <div className="flex gap-4">
            <p className="text-sm">Follow: </p>
            <span>
              {" "}
              <Link to="https://www.facebook.com/muhib160">
                <i className="ri-facebook-line"></i>
              </Link>{" "}
            </span>

            <span>
              <Link to="https://github.com/muhib160">
                <i className="ri-github-line"></i>
              </Link>
            </span>

            <span>
              {" "}
              <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                <i className="ri-youtube-line"></i>
              </Link>{" "}
            </span>

            <span>
              {" "}
              <Link to=" https://www.linkedin.com/in/muhib160/">
                <i className="ri-linkedin-line"></i>
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
