import "./gallery.css";

const Gallery = () => {
  return (
    <main className="m-0 p-0 flex items-center flex-col gap-6 gallery-bg h-[500px] w-screen">
      <div className="text-center text-[3em] text-white font-nova_square uppercase">
        gallery
      </div>
      <div className="scope my-12 sm:w-[200px] w-[150px]">
            <span style={{'--i':1}}><img  src="/gallery/G1.JPG" alt="" /></span>
            <span style={{'--i':2}}><img  src="/gallery/G2.JPG" alt="" /></span>
            <span style={{'--i':3}}><img  src="/gallery/G3.JPG" alt="" /></span>
            <span style={{'--i':4}}><img  src="/gallery/G4.JPG" alt="" /></span>
            <span style={{'--i':5}}><img  src="/gallery/G5.JPG" alt="" /></span>
            <span style={{'--i':6}}><img  src="/gallery/G6.JPG" alt="" /></span>
            <span style={{'--i':7}}><img  src="/gallery/G7.JPG" alt="" /></span>
            <span style={{'--i':8}}><img  src="/gallery/G8.JPG" alt="" /></span>
            <span style={{'--i':9}}><img  src="/gallery/G9.JPG" alt="" /></span>
            <span style={{'--i':10}}><img  src="/gallery/G10.JPG" alt="" /></span>
            <span style={{'--i':11}}><img  src="/gallery/G11.JPG" alt="" /></span>
            <span style={{'--i':12}}><img  src="/gallery/G12.JPG" alt="" /></span>
            <span style={{'--i':13}}><img  src="/gallery/G13.JPG" alt="" /></span>
            <span style={{'--i':14}}><img  src="/gallery/G14.JPG" alt="" /></span>
            <span style={{'--i':15}}><img  src="/gallery/G15.JPG" alt="" /></span>
            <span style={{'--i':16}}><img  src="/gallery/G16.JPG" alt="" /></span>
            <span style={{'--i':17}}><img  src="/gallery/G17.JPG" alt="" /></span>
            <span style={{'--i':18}}><img  src="/gallery/G18.JPG" alt="" /></span>
            <span style={{'--i':19}}><img  src="/gallery/G19.JPG" alt="" /></span>
            <span style={{'--i':20}}><img  src="/gallery/G20.JPG" alt="" /></span>
      </div>
    </main>
  );
};
// const Gallery = () => {
//   return (
//     <main className="container relative w-full h-full mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl">
//       <div className="text-center text-5xl font-Londrina_sketch text-emerald-500 mt-7">
//         G A L L E R Y
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//         <div className="grid gap-4">
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G1.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G2.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G3.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G4.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G5.JPG"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G6.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G7.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G8.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G9.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G10.JPG"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G11.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G12.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G13.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G14.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G15.JPG"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G16.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G17.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G18.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G19.JPG"
//               alt=""
//             />
//           </div>
//           <div>
//             <img
//               className="h-auto max-w-full rounded-lg"
//               src="/gallery/G20.JPG"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export default Gallery;
