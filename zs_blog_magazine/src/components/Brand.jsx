import React from 'react';
// const Brand = () => {
//   return (
//     <>
//       <section className="py-20 bg-green-100">
//         <div className="container mx-auto px-4 bg-green-100">
//           <div className="flex flex-wrap -mx-2 bg-white">
//             <div className="mb-4 w-full md:w-1/2 lg:w-1/5 px-2">
//               <div className="py-16 rounded">
//                 <a href="#">
//                   <img
//                     className="mx-auto h-6"
//                     src="images/logos_google.png"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="mb-4 w-full md:w-1/2 lg:w-1/5 px-2">
//               <div className="py-16 rounded">
//                 <a href="#">
//                   <img
//                     className="mx-auto h-6"
//                     src="images/Trello-logo-blue 1.png"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="mb-4 w-full md:w-1/2 lg:w-1/5 px-2">
//               <div className="py-16 rounded">
//                 <a href="#">
//                   <img
//                     className="mx-auto h-6"
//                     src="images/logos_monday.png"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="mb-4 w-full md:w-1/2 lg:w-1/5 px-2">
//               <div className="py-16 rounded">
//                 <a href="#">
//                   <img className="mx-auto h-6" src="images/Notion.png" alt="" />
//                 </a>
//               </div>
//             </div>
//             <div className="mb-4 w-full md:w-1/2 lg:w-1/5 px-2">
//               <div className="py-16 rounded">
//                 <a href="#">
//                   <img
//                     className="mx-auto h-6"
//                     src="atis-assets/logo/brands/slack.png"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Brand;

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap -mx-2 bg-white p-10 ">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2 "
              >
                <div>
                  <img className="mx-auto h-8" src={item["image"]} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
