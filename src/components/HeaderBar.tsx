import logo from "../assets/logo.png";

const HeaderBar = () => {
  return (
    <header className="w-full text-white px-4  top-0 left-0 flex items-center justify-start">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-lg text-shadow-md font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-400 to-yellow-600">
          Thomas Scott
        </h1>
      </div>
    </header>
  );
};

export default HeaderBar;
