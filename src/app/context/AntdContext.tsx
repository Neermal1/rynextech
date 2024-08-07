"use client";
import { createContext, useState } from "react";

//interface
import { IDefaultAntdContext } from "../interface/interface";

const defaultValue: IDefaultAntdContext = {
  openDrawer: false,
  setOpenDrawer: () => {},

  loading: false,
  setIsLoading: () => {},
};

export const AntdContext = createContext<IDefaultAntdContext>(defaultValue);

const AntdContextProvider = ({ children }: any) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const [loading, setIsLoading] = useState<boolean>(false);

  return (
    <AntdContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        loading,
        setIsLoading,
      }}
    >
      {children}
    </AntdContext.Provider>
  );
};
export default AntdContextProvider;
