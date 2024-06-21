// Importing Libraries
import React from "react";
import TheLogo from "./Components/TheLogo.jsx";
import Thelogoimg from "./assets/Screenshot_19-6-2024_4101_.png";
import SocialMediaIcons from "./Components/Socialicons/Socialicons.jsx";
import TheMenu from "./Components/TheMenu.jsx";
import Text from "./Components/ComingSoonText.jsx";
import coffee from "./assets/Coffee_Beans2.jpg";

import OroBtns from "./Components/OroButtons/OroBtns.jsx";

// Main Function
function App() {
  return (
    <>
      <TheLogo src={Thelogoimg} />
      <SocialMediaIcons />
      <TheMenu />
      <Text text="Coming soon" />

      {/* <img className="coffeeImg" src={coffee} alt="coffee" /> */}

      {/*
      <div className="coffeeImg">
        <img src={coffee} alt="coffee" />
      </div>
      */}
    </>
  );
}

export default App;
