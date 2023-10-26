import { ReactNode, createContext, useEffect, useState } from "react";

import { CoffeeService } from "../services/CoffeeService";

export interface ICoffee {
  title: string;
  id: number;
  image: string;
  description: string;
  ingredients: [];
}


export interface CoffeeContextType {
  hotCoffee: ICoffee[];
  icedCoffee: ICoffee[];
  isLoading: boolean;
}


export const CoffeeContext = createContext<CoffeeContextType>({
  hotCoffee: [],
  icedCoffee: [],
  isLoading: false,
});

export const CoffeeProvider = ({ children }: { children: ReactNode}) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [icedCoffee, setIcedCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCoffee() {
      const responseHot = await CoffeeService.getHotCoffee();
      const responseIced = await CoffeeService.getIcedCoffee();

      setHotCoffee(responseHot);
      setIcedCoffee(responseIced);
      setIsLoading(false);
    }

    fetchCoffee();
  }, []);

  const value = { hotCoffee, icedCoffee, isLoading };

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  );
};
