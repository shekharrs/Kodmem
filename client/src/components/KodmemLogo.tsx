type KodmemLogoProps = {
  className?: string;
  size?: number;
  color?: string;
};

const KodmemLogo = ({ className, size, color }: KodmemLogoProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}
      style={{width: size, height: size}}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M65 15V85"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M25 15L65 50"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M25 50H65"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M25 85L65 50"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default KodmemLogo;
