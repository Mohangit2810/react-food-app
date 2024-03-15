import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-start">
            <img src={logo} alt="logo" className="w-16 h-16 mb-4" />
            <h5 className="text-lg font-bold">Tasty Treat</h5>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              pariatur accusamus
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
              <li className="mb-2">
                Location: ZindaBazar, Sylhet-3100, Bangladesh
              </li>
              <li className="mb-2">Phone: 01712345678</li>
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
                className="w-full py-2 px-3 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <p className="text-sm">
            Copyright - 2022, website made by Muhibur Rahman. All Rights
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
