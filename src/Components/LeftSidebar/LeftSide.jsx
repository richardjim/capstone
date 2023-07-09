// import React, { useRef, useState, useEffect, useContext } from "react";
// import nature from "../../assets/images/nature.jpg";
// import { Tooltip } from "@material-tailwind/react";
// import { Avatar } from "@material-tailwind/react";
// import avatar from "../../assets/images/avatar.jpg";
// import job from "../../assets/images/job.png";
// import location from "../../assets/images/location.png";
// import facebook from "../../assets/images/facebook.png";
// import twitter from "../../assets/images/twitter.png";
// import laptop from "../../assets/images/laptop.jpg";
// import media from "../../assets/images/media.jpg";
// import apps from "../../assets/images/apps.jpg";
// import tik from "../../assets/images/tik.jpg";
// import { AuthContext } from "../AppContext/AppContext";

// const LeftSide = () => {
//   const [data, setData] = useState([]);
//   const count = useRef(0);
//   const { user, userData } = useContext(AuthContext);

//   const handleRandom = (arr) => {
//     setData(arr[Math.floor(Math.random() * arr?.length)]);
//   };

//   useEffect(() => {
//     const imageList = [
//       {
//         id: "1",
//         image: laptop,
//       },
//       {
//         id: "2",
//         image: media,
//       },
//       {
//         id: "3",
//         image: apps,
//       },
//       {
//         id: "4",
//         image: tik,
//       },
//     ];
//     handleRandom(imageList);
//     let countAds = 0;
//     let startAds = setInterval(() => {
//       countAds++;
//       handleRandom(imageList);
//       count.current = countAds;
//       if (countAds === 5) {
//         clearInterval(startAds);
//       }
//     }, 2000);

//     return () => {
//       clearInterval(startAds);
//     };
//   }, []);

//   const progressBar = () => {
//     switch (count.current) {
//       case 1:
//         return 20;
//       case 2:
//         return 40;
//       case 3:
//         return 60;
//       case 4:
//         return 80;
//       case 5:
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white pb-4 border-r border-gray-300">
//       {/* <div className="flex flex-col items-center relative">
//         <img className="h-32 w-full rounded-t" src={nature} alt="nature" />
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//           <Tooltip content="Profile" placement="top">
//             <Avatar size="md" src={user?.photoURL || avatar} alt="avatar" />
//           </Tooltip>
//         </div>
//       </div> */}
//       {/* <div className="flex flex-col items-center py-4">
//         <p className="font-medium text-md text-gray-700">{user?.email || userData?.email}</p>
//         <p className="text-xs text-gray-700">Access exclusive tools & insights</p>
//         <p className="font-medium text-sm text-gray-700">Try premium for free</p>
//       </div> */}
//       <div className="flex flex-col pl-4">
//         <div className="flex items-center pb-4">
//           <img className="h-6 mr-2" src={location} alt="location" />
//           <p className="font-bold text-lg">{user?.location || "California"}</p>
//         </div>
//         <div className="flex items-center">
//           <img className="h-6 mr-2" src={job} alt="job" />
//           <p className="font-bold text-lg">{user?.jobTitle || "React Developer"}</p>
//         </div>
//         <div className="flex justify-center items-center pt-4 space-x-2">
//           <p className="font-bold text-md text-[#0177b7] cursor-pointer">Events</p>
//           <p className="font-bold text-md text-[#0177b7] cursor-pointer">Groups</p>
//           <p className="font-bold text-md text-[#0177b7] cursor-pointer">Follow</p>
//           <p className="font-bold text-md text-[#0177b7] cursor-pointer">More</p>
//         </div>
//       </div>
//       <div className="ml-4 mt-4">
//         <p className="font-bold text-lg">Social Profiles</p>
//         <div className="flex items-center mt-2">
//           <img className="h-8 mr-2" src={facebook} alt="facebook" />
//           <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500">Social Network</p>
//         </div>
//         <div className="flex items-center mt-2">
//           <img className="h-8 mr-2" src={twitter} alt="twitter" />
//           <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500">Social Network</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center pt-4">
//         <p className="font-bold text-lg">Random Ads</p>
//         <div className="w-full bg-gray-200 rounded-xl h-2 mt-2">
//           <div style={{ width: `${progressBar()}%` }} className="bg-blue-600 rounded-xl h-full"></div>
//         </div>
//         <img className="h-40 mt-4 rounded-lg" src={data.image} alt="ads" />
//       </div>
//     </div>
//   );
// };

// export default LeftSide;
