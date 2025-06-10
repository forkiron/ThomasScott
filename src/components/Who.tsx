import logo from "../assets/logo.png";

const Who = () => {
  return (
    <div className="bg-[#F8F8FF] w-full flex flex-col md:flex-row justify-center items-center p-4 shadow h-auto gap-4">
      {/* Heading section - placed outside the main box on larger screens */}
      <div className="text-md md:text-2xl lg:text-3xl flex gap-1 tracking-tight md:flex-col md:items-center md:w-full ">
        <h1 className="font-medium md:font-semibold">Who is</h1>
        <h1 className="text-orange-500 drop-shadow-lg font-semibold md:font-bold  text-shadow-lg/30">
          Thomas Scott
        </h1>
      </div>

      {/* Content box */}
      <div className="bg-gradient-to-b md:flex md:justify-around md:items-center from-[#F0F8FF] via-[#F0F8FF] to-orange-50 w-full max-w-lg rounded-3xl p-4 shadow-xl ">
        <div className="text-xs/6 text-gray-600 font-medium md:text-base/6 lg:text-base/10 text-left">
          <p>☑ Irish Protestant.</p>
          <p>
            ☑ <u>Leader</u> at Heart.
          </p>
          <p>
            ☑ <u>Loyal</u> to Britain.
          </p>
          <p>
            ☑ Prioritizes <u>Unity.</u>
          </p>
          <p>
            ☑ <u>Boldly</u> Speaks Truth.
          </p>
        </div>
        <img src={logo} alt="logo" className="hidden lg:inline w-36 h-36" />
      </div>
    </div>
  );
};

export default Who;
