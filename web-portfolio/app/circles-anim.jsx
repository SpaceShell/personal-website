// import react, { useState, useEffect } from "react";

// export default function Circles() {
//   const [el, setEl] = useState([])
//   const [lefts, setLefts] = useState([])
//   const [tops, setTops] = useState([])
//   const [selectedColors, setSelectedColors] = useState([])

//   let colorRGB = [
//     'bg-red-400/40', 
//     'bg-amber-400/40', 
//     'bg-green-400/40', 
//     'bg-teal-400/40', 
//     'bg-sky-400/40', 
//     'bg-violet-400/40',
//     'bg-rose-400/40'
//   ]

//   useEffect(() => {
//     let elList = [];
//     let leftsList = [];
//     let topsList = [];
//     let selectedColorsList = [];

//     function getRandomInt(max) {
//       return Math.floor(Math.random() * max);
//     }
  
//     for (var i=0; i<5; i++) {
//         elList.push(i);
//         leftsList.push(getRandomInt(90));
//         topsList.push(getRandomInt(98));
//         selectedColorsList.push(colorRGB[getRandomInt(colorRGB.length - 1)])
//     } 

//     setEl(elList);
//     setLefts(leftsList);
//     setTops(topsList);
//     setSelectedColors(selectedColorsList);
//   }, []);

//   return (
//     <div className="w-full absolute h-full overflow-hidden scroll-wrapper" aria-hidden="true">
//       {el.map((i) => {
//         return <div key={i} className={`${selectedColors[i]} header-bg absolute h-40 w-40 lg:h-80 lg:w-80 bg-amber-400/40 rounded-full drop-shadow-sm`} style={{"--top": tops[i] + "%", "--left": lefts[i] + "%"}}></div>
//       })}
//       {el.map((i) => {
//         return <div key={i + 10} className={`${selectedColors[i]} header-bg-dupl absolute h-40 w-40 lg:h-80 lg:w-80 bg-amber-400/40 rounded-full drop-shadow-sm`} style={{"--top": tops[i] + "%", "--left": lefts[i] + "%"}}></div>
//       })}
//     </div>
//   );
// }