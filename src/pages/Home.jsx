// eslint-disable-next-line no-unused-vars
import React from "react";

import HeaderHome from "../components/HeaderHome";
import Popular from "../components/Popular";
import Recomendation from "../components/Recomendation";
import NewCollection from "../components/NewCollection";
import Follow from "../components/Follow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="w-full mb-14 ">
        <div className=" py-8 w-11/12 mx-auto ">
          <HeaderHome />

          <div className="w-full px-10 py-8 mb-5">
            <Popular />

            <div className="w-full mt-5 border-2 border-solid border-violet-200 h-86  py-5 rounded-xl ">
              <Recomendation />

              <NewCollection />
            </div>
          </div>

          <div className="w-full px-10">
            <div className="w-full bg-violet-400 h-24 text-white text-normal font-semibold text-center py-5 rounded-lg max-sm:py-3">
              <p>Get More Information by Login as Readers</p>
              <p>Also Feel Free to Contact Us</p>
            </div>

            <Follow />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
