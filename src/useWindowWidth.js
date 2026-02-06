import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
      
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
export function CustomComponent () {
  const width = useWindowWidth();

  return (
    <div>
      <p>Window width: {width}px</p>
    </div>
  );
};
export default CustomComponent;
