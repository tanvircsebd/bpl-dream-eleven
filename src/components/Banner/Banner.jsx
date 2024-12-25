import React from "react";
import bannerMain from "../../assets/banner-main.png"; // Adjust path accordingly
import bgShadow from "../../assets/bg-shadow.png"; // Adjust path accordingly

const Banner = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] text-white bg-[#131313] bg-cover bg-center"
        // style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <div
          className="text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 rounded-lg"
          style={{ backgroundImage: `url(${bgShadow})` }}
        >
          <img
            src={bannerMain}
            alt="Cricket Banner"
            className="mx-auto mb-6 w-24 lg:w-32"
          />
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-300">
            Beyond Boundaries, Beyond Limits
          </p>
          <button className="mt-6 btn btn-warning text-black font-bold">
            Claim Free Credit
          </button>
        </div>
      </section>

      {/* Other Website Content */}
      <section className="px-4 py-8 bg-white">
        <h2 className="text-xl font-bold text-gray-800">Available Players</h2>
        {/* Your player cards or other content */}
      </section>
    </div>
  );
};

export default Banner;

// import React from "react";
// import banner from "../../assets/banner-main.png";

// const Banner = () => {
//   return (
//     <div className="flex justify-center mt-10 mb-10">
//       <div className="carousel w-2/3 overflow-hidden scroll-smooth">
//         {/* <div
//           id="slide1"
//           className="carousel-item relative w-full transition-transform duration-1000 ease-in-out"
//         >
//           <img
//             src="https://uploads.donorperfect.com/images/dashboard-website-home-hero-sm-2.jpg"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div
//           id="slide2"
//           className="carousel-item relative w-full transition-transform duration-1000 ease-in-out"
//         >
//           <img
//             src="https://images.squarespace-cdn.com/content/v1/639b5b2c4098ba4df6e6dc92/70e4fec3-8121-4cdf-8c6e-5e74782f6fa8/Crowdfunding%2BYour%2BSmall%2BBusiness%2B-%2BWhat%2BYou%2BNeed%2Bto%2BKnow.jpg?format=1500w"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//         <div
//           id="slide3"
//           className="carousel-item relative w-full transition-transform duration-1000 ease-in-out"
//         >
//           <img
//             src="https://media.licdn.com/dms/image/v2/D5612AQH5A6XKSTLy4w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706674818278?e=1739404800&v=beta&t=TBikCvXv5ESf4XVZIYH4wxRtYiAZi_Yghdt2hknJPpU"
//             className="w-full"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div> */}
//         <div
//           id="slide4"
//           className="carousel-item relative w-full transition-transform duration-1000 ease-in-out"
//         >
//           <img src={banner} className="w-full" />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             {/* <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
