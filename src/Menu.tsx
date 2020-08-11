import React, { useCallback } from "react";

const Menu: React.FC = () => {

  const handleClick = useCallback((e: string) => {
    console.log(e);
  }, []);
  
  return <input onClick={handleClick}>TS click</input>;
};

export default Menu;
