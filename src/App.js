import { useEffect } from "react";

import Navbar from "./components/navigation/Navbar";
import SocialLeft from "./components/social/SocialLeft";
import SocialRight from "./components/social/SocialRight";


import { StateContext } from "./context/StateContext";
import Layout from "./components/Layout";

function App() {

  useEffect(() => {
    document.title = "Pavel Hajduch Portfolio React Developer"
 }, []);

  return (
    <>
      <StateContext>
        <Layout />
        <div className="social">
          <Navbar />
          <SocialLeft />
          <SocialRight /> 
        </div>
      </StateContext>
    
    </>
    
  );
}

export default App;




