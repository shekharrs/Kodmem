const HeroSection = () => {
  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-44 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center, rgba(255, 255, 255, 0.7)_0%, rgba(249,248,244,0.4)_100%]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center mb-12 lg:mb-16">
          <div className="inline-block mb-10 px-8 py-2.5 border border-stone-200 text-stone-400 text-[10px] mt-[8rem] tracking-[0.4em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50 animate-fade-in shadow-sm">
            The Science of Coding Memory
          </div>

          {/* title */}
          <div>

          <h1 className="font-sans font-bold">Code Into</h1>
          <h1>Permance.</h1>ś
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
