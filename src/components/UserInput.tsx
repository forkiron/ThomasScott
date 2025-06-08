import React, { useState, type FormEvent } from "react";

interface Props {
  submitInput: (inputUse: string) => void;
  onIdeaClick: () => void;
  userText: string;
  setUserText: (text: string) => void;
}

const UserInput = ({
  submitInput,
  onIdeaClick,
  userText,
  setUserText,
}: Props) => {
  const doSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitInput(userText);
    setUserText("");
  };

  return (
    <div className=" backdrop-blur-sm rounded-lg flex justify-center h-52 w-96 shadow-md">
      <form onSubmit={doSubmit} className="flex-col flex items-center">
        <label
          htmlFor="user-question"
          className="text-gray-600 flex gap-1 text-lg p-2 px-3 font-semibold border border-solid border-slate-400 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 w-full rounded-t-lg top-0"
        >
          <div>Ask Thomas Scott Fans </div>
          <div className="bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text">
            Anything.
          </div>
        </label>
        <input
          type="text"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          id="user-question"
          placeholder="Enter question"
          className="bg-white/100 placeholder:text-xs p-4 border-l border-r border-slate-200 placeholder-white-300 w-96 transition duration-300 h-60"
        />
        <div className="flex justify-between w-full h-64 items-center px-4 bg-white border border-slate-600 rounded-b-lg">
          <button
            type="button"
            onClick={onIdeaClick}
            className="bg-slate-400 text-xs hover:bg-slate-500 transition font-medium text-white px-3 py-2 rounded-lg"
          >
            Need Ideas?
          </button>
          <button
            type="submit"
            className=" bg-orange-400 font-medium text-xs text-white px-3 py-2 rounded-3xl hover:bg-orange-500 transition"
          >
            Submit →
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
