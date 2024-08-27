import { useEffect, useState } from "react";

const useNumber = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("hello from custom hook");
  }, []);
  return number;
};

export default useNumber;
