import { ReactNode, createContext, useEffect, useState } from 'react';

import { coffeeService } from '../services/coffeeService';

export interface ICoffee {
  title: string;
  id: number;
  image: string;
  description: string;
  ingredients: [];
}

export interface ICoffeeType {
  hotCoffee: ICoffee[];
  icedCoffee: ICoffee[];
  isLoading: boolean;
}

export const CoffeeContext = createContext<ICoffeeType>({
  hotCoffee: [],
  icedCoffee: [],
  isLoading: true,
});

export const CoffeeProvider = ({ children }: { children: ReactNode }) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [icedCoffee, setIcedCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCoffee() {
      const responseHot = await coffeeService.getHotCoffee();
      const responseIced = await coffeeService.getIcedCoffee();

      // They added this morning coffee with nothing so it needs this filtering
      const newHotCoffee = responseHot.filter((coffee: ICoffee) => coffee.title !== 'nothing');

      setHotCoffee(newHotCoffee);
      setIcedCoffee(responseIced);
      setIsLoading(false);
    }

    fetchCoffee();
  }, []);

  const value = { hotCoffee, icedCoffee, isLoading };

  return <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>;
};
