import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();
const Api = "https://fakestoreapi.com/products";

const UserProvider = ({ children }) => {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Api);
        const Data = await response.json();
        setdata(Data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ data }}>{children}</UserContext.Provider>
  );
};
const useUserContext = () => {
  return useContext(UserContext);
};
export { useUserContext, UserProvider, Api };
