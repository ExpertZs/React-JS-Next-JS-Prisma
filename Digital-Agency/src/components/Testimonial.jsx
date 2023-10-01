import React from "react";

// const Testimonial = () => {
//   return (
//     <>
//       <section className="  pt-20 pb-12">
//         <div className="container mx-auto">
//           <div className="max-w-lg mx-auto mb-12 text-center">
//             <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
//               Our Customers Very Happy With Our Services
//             </h2>
//             <p className="text-blueGray-400 leading-loose">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               luctus eget justo et iaculis.
//             </p>
//           </div>
//           <div className="flex flex-wrap">
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 py-5 md:px-5">
//               <div
//                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
//                 data-wow-delay=".1s"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     className="h-16 w-16 rounded-full object-cover"
//                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
//                     alt="Monst"
//                   />
//                   <div className="pl-4">
//                     <strong className="mt-6 mb-2 text-md">
//                       Geraldine Tusoy
//                     </strong>
//                     <p className="text-gray-500 text-xs mt-3">
//                       CEO, Co Founders
//                     </p>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-blueGray-400 mb-5">
//                   Donec consequat tortor risus, at auctor felis consequat a.
//                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
//                   pulvinar. Vestibulum non quam velit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Testimonial;
async function getData(){
  const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
  if(!res.ok){
      throw new Error("Testimonial List Calling Fail");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
      <div>
          <section>
              <div className="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
                  <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                      <div
                          className="flex flex-wrap  items-start">
                          <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                              <span className="text-green-600 font-bold">
                              Testimonial List
                              </span>
                              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                              Better Agency/SEO Solution At Your Fingertips
                              </h2>
                          </div>
                      </div>
                  </div>
                  <div className="relative flex">
                      <div className="flex flex-wrap max-w-6xl px-2 mx-auto">

                          {
                              data.map((item,i)=>{
                                  return(
                                      <div key={i} className="mb-4 w-full lg:w-1/3 px-3">
                                          <div className="p-8 bg-white rounded shadow text-center">
                                              <div className="bg-no-repeat bg-left-top"
                                                   style={{backgroundImage: 'url("atis-assets/elements/quote-grey.svg")'}}>
                                                  <p className="mb-8 text-gray-500 leading-loose">
                                                      {item['msg']}
                                                  </p>
                                                  <img className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                                                       src={item['image']}
                                                       alt=""/>
                                                  <h4 className="mb-1 text-2xl font-bold font-heading">
                                                      {item['name']}
                                                  </h4>
                                                  <p className="text-gray-500">{item['designation']}</p>
                                              </div>
                                          </div>
                                      </div>
                                  )
                              })
                          }
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};
export default Testimonial;