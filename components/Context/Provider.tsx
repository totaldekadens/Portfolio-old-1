import React, { useEffect, useRef } from "react";
import { FC, PropsWithChildren, useState } from "react";

interface Props {}

interface hideContextData {
  scrollY: number;
  scrollHeight: number;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export const hideContext = React.createContext<hideContextData>({
  scrollY: 0,
  scrollHeight: 0,
  hide: false,
  setHide: () => {},
});
// Sets hide to true if scroll down and false when scroll up
const HideProvider: FC<PropsWithChildren<Props>> = (props) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);

  // Refs
  const valueRef = useRef<any | null>();
  valueRef.current = scrollY;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setScrollY(window.scrollY);
    let previousScrollY = valueRef.current;

    let height = window.innerHeight + window.scrollY;
    setScrollHeight(height);

    // Px from bottom
    let result = document.body.offsetHeight - scrollHeight;

    if (window.scrollY > 60) {
      if (result < 100) {
        setHide(true);
        return;
      }
      if (previousScrollY < window.scrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
    } else {
      setHide(false);
    }
  };

  return (
    <hideContext.Provider value={{ hide, setHide, scrollHeight, scrollY }}>
      {props.children}
    </hideContext.Provider>
  );
};

export default HideProvider;
