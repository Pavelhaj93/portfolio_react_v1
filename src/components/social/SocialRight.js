import { React, useState, useLayoutEffect } from "react";

function SocialRight() {
  const [screenSize, setScreenSize] = useState([]);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setScreenSize([window.innerWidth]));

    setScreenSize([window.innerWidth]);

    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize([window.innerWidth])
      );
  }, []);

  return (
    <>
      <div className={screenSize > 768 ? "social--right" : "hidden"}>
        <a
          className="social--right__email"
          href="mailto:pavelhajduch@93@gmail.com"
        >
          pavelhajduch93@gmail.com
        </a>
      </div>
    </>
  );
}

export default SocialRight;
