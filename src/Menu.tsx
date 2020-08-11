import React, { useCallback } from "react";

const Menu: React.FC = () => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    console.log(e);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>TS click</button>
    </div>
  );
};

export default Menu;
