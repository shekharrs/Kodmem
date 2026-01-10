import { ArrowDown } from "lucide-react";
import ReviewDemo from "./ReviewDemo";

const HeroSection = () => {

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-44 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center, rgba(255, 255, 255, 0.7)_0%, rgba(249,248,244,0.4)_100%]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center mb-12 lg:mb-16">
        
        {/* Eyebrow */}
          <div className="inline-block mb-10 px-8 py-2.5 border border-stone-200 text-stone-400 text-[10px] mt-[8rem] tracking-[0.4em] uppercase font-bold rounded-lg backdrop-blur-sm bg-white/50 animate-fade-in shadow-sm">
            Memory Science for Developers
          </div>

          {/* Hero */}
          <h1>
            <div className="font-sans text-6xl sm:text-8xl md:text-9xl font-black leading-[1] text-stone-950 tracking-tight">Code Into</div>
            <div className="font-sans text-6xl sm:text-8xl md:text-9xl italic font-normal text-stone-400/90 leading-[1.1]">Permanence.</div>
          </h1>

          {/* Subline */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mt-[5rem] text-stone-500 font-medium leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
             Remember your code. Not just learn it.          
          </p>

          {/* Preview */}
          <div className="flex flex-col items-center gap-6 sm:gap-8  mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#demo" className="group flex flex-col items-center gap-3 text-xs font-bold text-stone-400 hover:text-stone-900 transition-colors cursor-pointer mt-4">
              <span className="tracking-[0.2em]">Preview the experience below</span>
              <span className="p-3 border border-stone-200 rounded-full group-hover:border-stone-900 transition-all">
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform"/>
              </span>
            </a>
          </div>
        </div>

        {/* ReviewDemo */}
        <div id="demo" className="relative z-10 w-full px-4 sm:px-6">
          <ReviewDemo />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
