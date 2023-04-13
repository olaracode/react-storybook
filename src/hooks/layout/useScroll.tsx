import React from "react";

const useScroll = () => {
  const [show, setShow] = React.useState<Boolean>(false);
  const currentPosition = React.useRef(window.pageYOffset);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > currentPosition.current) {
      setShow(false);
    } else {
      setShow(true);
    }
    currentPosition.current = currentScrollPos;
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { show };
};

export default useScroll;
