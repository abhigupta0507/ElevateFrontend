// import logophoto from "../images/ELELOGOF.png";
// export default function Footer() {
//   return (
//     <section className="mt-10 py-10 bg-[#f1d55f] sm:pt-16 lg:pt-24 border-t border-0.5 border-gray-300">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-4 gap-y-16 gap-x-12">
//           <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
//             <img className="w-auto h-9" src={logophoto} alt="logo" />

//             <p className="text-left leading-relaxed text-gray-600 mt-7">
//               At Elevate, we’re dedicated to empowering your fitness journey.
//             </p>

//             <ul className="flex items-center space-x-3 mt-9">
//               <li>
//                 <a
//                   href="about"
//                   title=""
//                   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="recipies"
//                   title=""
//                   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="workout"
//                   title=""
//                   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
//                     <circle cx="16.806" cy="7.207" r="1.078"></circle>
//                     <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="diet"
//                   title=""
//                   className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
//                     ></path>
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
//               Quick Links
//             </p>

//             <ul className="mt-6  space-y-4 ">
//               <li className="text-center ">
//                 <a
//                   href="/community"
//                   title=""
//                   className="justify-center flex text-center text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   <p className="text-center">Community </p>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/progress"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Progress{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/workoutplans"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Workout{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="/dietplans"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   DietPlan{" "}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
//               Help
//             </p>

//             <ul className="mt-6 space-y-4">
//               <li>
//                 <a
//                   href="#"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Customer Support{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Delivery Details{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   title=""
//                   className="justify-centerflex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Terms & Conditions{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   title=""
//                   className="justify-center flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//                 >
//                   {" "}
//                   Privacy Policy{" "}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <hr className="mt-16 mb-10 border-gray-200" />

//         <p className="text-sm text-center text-gray-600">
//           © Copyright 2024, All Rights Reserved by Elevate
//         </p>
//       </div>
//     </section>
//   );
// }
import logophoto from "../images/ELELOGOF.png";

export default function Footer() {
  return (
    <footer className="mt-10 py-12 bg-gradient-to-r from-amber-300 to-amber-400 border-t border-amber-500/20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {/* Logo and Description Column */}
          <div className="lg:col-span-1">
            <img
              className="w-auto h-12 transition-transform duration-300 hover:scale-105"
              src={logophoto}
              alt="Elevate Logo"
            />
            <p className="text-gray-700 mt-4 font-light leading-relaxed max-w-xs">
              At Elevate, we're dedicated to empowering your fitness journey
              with personalized solutions for your health and wellness goals.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-6">
              {["twitter", "facebook", "instagram", "github"].map(
                (platform) => (
                  <a
                    key={platform}
                    href={`/${platform}`}
                    className="flex items-center justify-center text-white bg-gray-800 rounded-full w-9 h-9 
                            transition-all duration-300 transform hover:scale-110 hover:bg-blue-600 
                            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    aria-label={`Visit our ${platform} page`}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-bold tracking-wider text-gray-700 uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Community", "Progress", "Workout", "Diet Plan"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`/${link.toLowerCase().replace(" ", "")}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 
                              flex items-center group"
                    >
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help Column */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-bold tracking-wider text-gray-700 uppercase mb-4">
              Help & Support
            </h3>
            <ul className="space-y-3">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 
                              flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-bold tracking-wider text-gray-700 uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for fitness tips and updates.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-amber-500/30" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Elevate. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 mx-2"
            >
              Sitemap
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 mx-2"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-blue-600 mx-2"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
const SocialIcon = ({ platform }) => {
  switch (platform) {
    case "twitter":
      return (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
        </svg>
      );
    case "facebook":
      return (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
        </svg>
      );
    case "instagram":
      return (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
          <circle cx="16.806" cy="7.207" r="1.078"></circle>
          <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
        </svg>
      );
    case "github":
      return (
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          ></path>
        </svg>
      );
    default:
      return null;
  }
};
