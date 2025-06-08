import React from "react";

interface Props {
  assistantResponse: string;
}

const Response = ({ assistantResponse }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full max-w-xl text-gray-800">
      <h2 className="font-bold text-lg mb-2">Supporters Say:</h2>
      <p className="whitespace-pre-wrap">{assistantResponse}</p>
    </div>
  );
};

export default Response;
