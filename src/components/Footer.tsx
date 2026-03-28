export const Footer = () => {
  return (
    <footer className="w-full  py-5 px-2 md:px-5 flex justify-between flex-row items-center border-t-2 mt-10 text-white">
      <div className="w-1/3">
        <div className="text-xs">JU ETŠ "Nikola Tesla", Banja Luka</div>
      </div>
      <div className="w-1/3 text-center font-black text-xl tracking-wide">
        Tesla<span className="text-blue-600 ">Mind</span>
      </div>
      <div className="flex flex-col justify-between text-right items-end w-1/3">
        <p className="text-xs md:text-sm text-(--subtext)">
          © {new Date().getFullYear()}
          copyright
        </p>
      </div>
    </footer>
  );
};
