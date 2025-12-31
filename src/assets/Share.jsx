// import React from 'react'
// import { CgAttachment } from "react-icons/cg";
// import { CiFaceSmile } from 'react-icons/ci';
// import { TbAlphabetLatin } from 'react-icons/tb';
// import { VscMention } from 'react-icons/vsc';

// const Share = () => {
//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='w-[400px] h-24 bg-gray-50 rounded-lg shadow p-1'>
//         <input placeholder='Try @somen' type="text" className='w-full outline-none px-2 h-6 max-h-24 overflow-y-auto mt-1' />
//         <div className='flex justify-between'>
//           <div className='flex items-center gap-2 mt-10 ml-2 text-gray-700'>
//           <CgAttachment />
//           <VscMention />
//           <CiFaceSmile />
//           <TbAlphabetLatin />

// </div>
// <button className='mt-6 '>
//   send
// </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Share










// import React, { useState } from 'react';
// import { CgAttachment } from "react-icons/cg";
// import { VscMention } from "react-icons/vsc";
// import { CiFaceSmile } from "react-icons/ci";
// import { TbAlphabetLatin } from "react-icons/tb";

// const Share = () => {
//   const [text, setText] = useState('');
//   const [isFocused, setIsFocused] = useState(false);

//   const isEmpty = text.trim() === '';

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-xl mx-4 p-4">

//         <div
//           className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 ${
//             isFocused
//               ? 'border border-teal-400 ring-4 ring-teal-100'
//               : 'border border-gray-200'
//           }`}
//         >
        

//           {/* Textarea */}
//           <div className="p-4 ">
//             <textarea
//               placeholder="Try @someone or share something awesome..."
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//               className="w-full text-lg text-gray-900 placeholder-gray-500 outline-none resize-none min-h-20 max-h-60 bg-transparent"
//               rows={3}
//               autoFocus
//             />
//           </div>

//           {/* Bottom bar */}
//           <div className="flex items-center justify-between px-2">
//             {/* Icons */}
//             <div className="flex items-center gap-2 text-blue-500">
//               <button className="p-2 hover:bg-blue-50 rounded-full transition">
//                 <CgAttachment size={20} />
//               </button>
//               <button className="p-2 hover:bg-blue-50 rounded-full transition">
//                 <VscMention size={20} />
//               </button>
//               <button className="p-2 hover:bg-blue-50 rounded-full transition">
//                 <CiFaceSmile size={20} />
//               </button>
//               <button className="p-2 hover:bg-blue-50 rounded-full transition">
//                 <TbAlphabetLatin size={20} />
//               </button>
//             </div>

//             {/* Post Button */}
//             <button
//               disabled={isEmpty}
//               className={`px-4 py-1 rounded-md font-semibold transition-all ${
//                 isEmpty
//                   ? 'bg-blue-300 text-white cursor-not-allowed'
//                   : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95 shadow-md'
//               }`}
//             >
//               send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Share;





















import React, { useEffect, useRef } from "react";
import Snowfall from "react-snowfall";
import image from "../assets/image.jpeg";
import  some from '../assets/some.mp3'
const Share = () => {
   const audioRef = useRef(null);

  
  
   
   useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  // Ye sab se zaroori hai
  audio.muted = true;        // pehle mute karo
  audio.volume = 0.6;        // volume set
  audio.play().catch(() => {
    console.log("Muted autoplay blocked bhi? Rare case.");
  });

  // User ka pehla tap = sound on
  const unmuteAndPlay = () => {
    audio.muted = false;
    audio.play().catch(e => console.log("Unmute play error:", e));
    
    // Ek baar sound on, listener hata do
    document.removeEventListener("touchstart", unmuteAndPlay);
    document.removeEventListener("click", unmuteAndPlay);
    document.removeEventListener("pointerdown", unmuteAndPlay);
  };

  // Sab events add kar do (mobile + desktop cover)
  document.addEventListener("touchstart", unmuteAndPlay, { once: true });
  document.addEventListener("click", unmuteAndPlay, { once: true });
  document.addEventListener("pointerdown", unmuteAndPlay, { once: true });

}, []);

  return (
    
    // <div className="relative w-full h-screen overflow-hidden font-serif">
    <div className="relative w-full h-screen overflow-hidden font-serif">

      {/* Background */}
      
        {/* <audio ref={audioRef} src={some} loop />
         */}

          {/* <audio ref={audioRef} src={some} loop playsInline /> */}

          <audio
  ref={audioRef}
  src={some}
  loop
  playsInline
  preload="auto"   // ye important hai fast load ke liye
/>
       <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 blur-sm scale-110"
      />

      {/* Dark overlay for emotion */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Snowfall */}
      <Snowfall
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
          
          {/* Stickers */}
          <div className="flex justify-center gap-4 text-3xl mb-4">
            🌸 ❄️ 💔 ✨ 🥀
          </div>

          <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
            Hey Himanshi 🌙  
            <br />
            <span className="text-sm font-normal">
              Happy New Year in advance 🌸
            </span>
          </h1>

          <p className="leading-relaxed text-sm md:text-base space-y-3">
            Mujhe pata nahi main yeh sab kaise shuru karun,  
            par bas dil ki baat kehna chahta hoon.
            <br /><br />

            Main aapse pyaar karta hoon…  
            koi bolne-wala ya time-pass pyaar nahi,  
            balki sach-mein, dil se.  
            Mujhe pata hai shayad aap mujhe  
            kabhi us nazar se nahi dekhti,  
            phir bhi dil maanta nahi 💔
            <br /><br />

            Kabhi-kabhi mujhe samajh hi nahi aata  
            ki main aisi kaunsi galti kar raha hoon.  
            Mujhe pata hai mere andar bahut kamiyaan hain,  
            par aap kis baat se khush hoti ho—  
            yeh main aaj bhi nahi jaan paaya.
            <br /><br />

            2024 se Jan 2025 tak hum dost the,  
            par mere liye woh sirf dosti nahi thi.  
            Aapka chhoti baaton par gussa ho jana,  
            mujh par shak karna,  
            meri care karna—  
            yeh sab pal aaj bhi zinda hain mere andar 🌙
            <br /><br />

            Mujhe pata hai main aap par  
            kuch bhi force nahi kar sakta.  
            Bas itna kehna hai ki  
            is naye saal mein bhi  
            main effort karna chhod nahi paaya.
            <br /><br />

            Kabhi aap ek-do din achhe se baat karti ho,  
            phir sab normal ho jata hai…  
            aur wahi confusion reh jaata hai.  
            Shayad yeh overthinking hai,  
            par yeh bhi mere dil ka sach hai.
            <br /><br />

            Bas itni si wish hai  
            ki is New Year par  
            sab thoda sa clear ho jaaye,  
            thoda sa better ho jaaye ✨
            <br /><br />

            Yeh message koi pressure nahi hai,  
            bas dil ka bojh halka karne ki ek koshish hai.
          </p>

          {/* Footer */}
          <div className="text-center mt-6 text-sm opacity-80">
            Happy New Year 2026 ❄️  
            <br />
            Dua hai yeh saal aapke liye sabse best ho 🌸
          </div>

          {/* Bottom stickers */}
          <div className="flex justify-center gap-3 mt-4 text-2xl">
            ❄️ 🤍 ✨ 💫
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Share;
