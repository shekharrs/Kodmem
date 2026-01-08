import KodmemLogo from "./KodmemLogo"

type NavbarProps = {view: "landing" | "app"}

const Navbar = ({view}: NavbarProps) => {
  return (
    <div>
        <KodmemLogo size={view === "landing" ? 32 : 28} color="#1C1917" />
    </div>
  )
}

export default Navbar