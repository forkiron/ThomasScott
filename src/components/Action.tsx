import change1 from "../assets/change1.png";

const Action = () => {
  return (
    <div className="w-full px-4 flex justify-center items-center pt-4">
      <div className="flex flex-col items-center shadow-xl bg-gradient-to-r from-[#f4f6f9] via-[#F0F8FF] to-[#FFF8E1] rounded-xl px-4 py-8 sm:w-full w-72 max-w-md ">
        <img className="object-contain w-64 md:w-80" src={change1} alt="" />

        <div className="text-black font-poppins text-center mt-4 space-y-1">
          <h1 className="text-lg md:text-2xl font-semibold">
            Make the right choice and
          </h1>
          <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-tr from-slate-50 via-yellow-300 to-yellow-600 text-transparent bg-clip-text">
            brighten
          </h1>
          <h1 className="text-lg md:text-2xl font-semibold">your future.</h1>
        </div>
        <p className="mt-4 text-sm md:text-base text-center px-2">
          "Oranges are sour at first, much like how IB feels overwhelming in the
          beginning, but stick with it, and you'll find that the sweetness of
          the fruit comes from hard work and resilience." — IB Student
        </p>
      </div>
    </div>
  );
};

export default Action;
