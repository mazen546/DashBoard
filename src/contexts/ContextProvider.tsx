import React, { createContext, useContext, useState } from "react";

//@ts-expect-error:"Expected 1 arguments, but got 0."
const StateContext = createContext();

interface initialStateTypes {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}
// interface StateContextTypes {
//   initialState: initialStateTypes;
// }
const initialState: initialStateTypes = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
