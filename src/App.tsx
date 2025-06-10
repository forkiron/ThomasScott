//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import UserInput from "./components/UserInput";
import spinny from "./assets/spinny.gif";
import HeaderBar from "./components/HeaderBar";
import BottomBar from "./components/BottomBar";
import Who from "./components/Who";
import Action from "./components/Action";
import Response from "./components/Response";

import thomasfirst from "./assets/thomasfirst.png";

import apple from "./assets/apple.png";
import instagram from "./assets/instagram.png";
import spotify from "./assets/spotify.png";
import soundcloud from "./assets/soundcloud.png";
import gmail from "./assets/gmail.png";
import pony from "./assets/pony.png";
function App() {
  /*
  const [alertVisible, setAlertVisibility] = useState(false);
  
  const handleClose = () => {
    setAlertVisibility(false);
  };
  const handleButtonClick = () => {
    if (alertVisible) {
      setAlertVisibility(false);
    } else {
      setAlertVisibility(true);
    }
  };*/
  const [userText, setUserText] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");

  const handleIdea = () => {
    const ranNum = Math.floor(Math.random() * 14);
    const ideaList = [
      "Who is Thomas Scott?",
      "What are some qualities of Thomas Scott?",
      "Why is Thomas Scott a great candidate?",
      "How has Thomas Scott demonstrated leadership in challenging situations?",
      "What sets Thomas Scott apart from other candidates?",
      "How has Thomas Scott shown resilience throughout his journey?",
      "In what ways has Thomas Scott proven his ability to communicate effectively?",
      "How has Thomas Scott taken initiative in his past roles?",
      "What are some examples of Thomas Scott’s strategic thinking?",
      "How has Thomas Scott responded to opposition or criticism?",
      "Why is Thomas Scott the right choice to lead during uncertain times?",
      "What does Thomas Scott stand for, and how has he shown commitment to his values?",
      "How does Thomas Scott inspire others around him?",
    ];

    setUserText(ideaList[ranNum]);
  };

  const logPut = async (inputUse: string) => {
    console.log("Sending question:", inputUse);

    try {
      const response = await fetch("https://thomasscott.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputUse }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAssistantResponse(data.answer);
    } catch (error) {
      console.error("❌ Error contacting Gemini backend:", error);
    }
  };

  const initialBar = () => (
    <span className="text-white">BLUE IS ABHORRENT, VOTE FOR ORANGE</span>
  );

  const orderedLogo = () => (
    <div className="flex items-center md:gap-16 gap-16">
      <img src={apple} alt="apple" className="object-contain h-8 md:h-12" />
      <img
        src={instagram}
        alt="instagram"
        className="object-contain h-8 md:h-12"
      />
      <img
        src={spotify}
        alt="spotify"
        className="object-contain h-10 md:h-16"
      />
      <img src={gmail} alt="gmail" className="object-contain h-8 md:h-12" />
      <img src={soundcloud} alt="sc" className="object-contain h-10 md:h-16" />
      <img src={pony} alt="pony" className="object-contain h-10 md:h-12" />
    </div>
  );

  return (
    <div className=" bg-orange-50 flex flex-col items-center justify-center py-4 no-scrollbar overflow-x-hidden w-full">
      <HeaderBar />
      <img src={spinny} alt="giffy" className="w-64 h-64" />
      <div className="flex flex-col gap-5 w-full items-center">
        <UserInput
          userText={userText}
          setUserText={setUserText}
          onIdeaClick={handleIdea}
          submitInput={logPut}
        />
        <Response assistantResponse={assistantResponse} />

        <BottomBar
          title={initialBar}
          scroll={0.5}
          direction={false}
          color="w-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 overflow-hidden h-12 flex items-center"
        />
      </div>
      <div className="flex justify-start w-full">
        <Who />
        <img
          src={thomasfirst}
          alt=""
          className="w-full min-w-16 max-w-96 h-auto object-contain p-4"
        />
      </div>
      <div className="flex flex-col justify-center w-full overflow-x-hidden">
        <BottomBar
          title={() => (
            <div className="w-full max-w-screen-lg mx-auto px-4 flex justify-center">
              {orderedLogo()}
            </div>
          )}
          scroll={1.5}
          direction={true}
          color="w-full bg-gradient-to-l from-orange-100 via-orange-200 to-orange-300 overflow-hidden h-24 flex items-center"
        />

        {/* ✅ Shadow container wrapper */}
        <div className="relative w-full flex justify-center px-4 py-8 z-10">
          <Action />
        </div>
      </div>
    </div>
    /*
    <div>
      {alertVisible && <Alert onClose={handleClose}>Hello World</Alert>}
      <Button color="btn btn-primary" onButtonClick={handleButtonClick}>
        Bro
      </Button>
    </div>
    */
  );
}
export default App;
