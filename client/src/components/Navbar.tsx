import KodmemLogo from "./KodmemLogo";

// type NavbarProps = {
//   view: "landing";
// };

const Navbar = () => {

  return (
    <div className="w-full p-5 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <KodmemLogo className="shrink-0" size={32} color="#1C1917" />
        <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tighter text-stone-900 leading-none lowercase">
          Kodmem
        </span>
      </div>

      <div className="flex items-center gap-8">
        <a href="#demo" className="relative group py-2 text-[10px] font-black tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors uppercase">
          Join Waitlist
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
