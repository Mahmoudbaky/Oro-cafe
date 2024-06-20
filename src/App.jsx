// Importing Libraries
import React from "react";
import TheLogo from "./Components/TheLogo.jsx";
import Thelogoimg from "./assets/Screenshot_19-6-2024_4101_.png";
import SocialMediaIcons from "./Components/Socialicons/Socialicons.jsx";
import TheMenu from "./Components/TheMenu.jsx";
import Text from "./Components/ComingSoonText.jsx";

import OroBtns from "./Components/OroButtons/OroBtns.jsx";

// Main Function
function App() {
  return (
    <>
      <TheLogo src={Thelogoimg} />
      <SocialMediaIcons />
      <TheMenu />
      <Text text="Opening soon" />
    </>
  );
}

export default App;
