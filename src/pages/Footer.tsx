
export const Footer = () => {
  return (
    <footer data-aos="fade-in" data-aos-duration='1000' id="footer" className="select-none">
      {/* <hr className="w-11/12 mx-auto" /> */}

      <section className="container mt-14 md:grid-cols-2 xl:grid-cols-2 gap-y-8">

        <div className="flex flex-row gap-5 justify-center sm:text-sm">
          <div>
            <a
              href="/"
              className="opacity-60 hover:opacity-100"
            >
              Home
            </a>
          </div>

          <div>
            <a
              href="/credentials"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>

          <div>
            <a
              href="/projects"
              className="opacity-60 hover:opacity-100"
            >
              Projects
            </a>
          </div>

          <div>
            <a
              href="/contact"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>
        </div>

      </section>

      <section className="container p-6 text-center ">
        <h3>
          &copy; Made with ❤️ by {" "}
          <a
            href="https://github.com/PiyushK79"
            target = "_blank"
            className="text-amber-700 transition-all border-amber-700 hover:border-b-2"
          >
            Piyush
          </a>
        </h3>
      </section>
    </footer>
  );
};

















// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="footer mt-20 mb-7">
//         <ul className="flex justify-center items-center gap-10">
//           <li className="pb-5">
//             <a href="/">Home</a>
//           </li>
//           <li className="pb-5">
//             <a href="/about">About</a>
//           </li>
//           <li className="pb-5">
//             <a href="/projects">Projects</a>
//           </li>
//           <li className="pb-5">
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//         <p className="flex justify-center items-center">
//           Made with love by Piyush.
//         </p>
//       </div>
//   )
// }

// export default Footer