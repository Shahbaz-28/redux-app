import { useState } from "react";

const UseTogle = () => {
  const [myName, setmyName] = useState("Your Name");

  return {
    myName, setmyName
  }
};

export default UseTogle;
