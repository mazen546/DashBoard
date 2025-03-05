import React, { createContext, useContext, useState } from "react";

interface StateContextTypes {
  activeMenu: boolean;
  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
  handleClick: (clicked: string) => void;
  isClicked: initialStateTypes;
  initialState: initialStateTypes;
  setIsClicked: React.Dispatch<React.SetStateAction<initialStateTypes>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
//@ts-expect-error:"Expected 1 arguments, but got 0."
const StateContext = createContext<StateContextTypes>();

interface initialStateTypes {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}
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
  //@ts-expect-error:""
  const [screenSize, setScreenSize] = useState<number>(undefined);
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

//// @ts-expect-error: "Type 'unknown' is not assignable to type 'StateContextTypes'".
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
