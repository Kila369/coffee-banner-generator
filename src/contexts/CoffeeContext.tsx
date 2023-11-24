import { ReactNode, createContext, useEffect, useState } from 'react';

import { coffeeService } from '../services/coffeeService';

export interface ICoffee {
  title: string;
  id: number;
  image: string;
  description: string;
  ingredients: [];
}

export interface ICoffeeContextType {
  hotCoffee: ICoffee[];
  icedCoffee: ICoffee[];
  isLoading: boolean;
  type: string;
  setType: (type: string) => void;
  selectedCoffeeId: number;
  setSelectedCoffeeId: (coffeeId: number) => void;
  width: string;
  setWidth: (width: string) => void;
  hasImage: boolean;
  setHasImage: (hasImage: boolean) => void;
  selectedCoffee?: ICoffee;
  setSelectedCoffee: (coffee: ICoffee) => void;
}

export const CoffeeContext = createContext<ICoffeeContextType>({
  hotCoffee: [],
  icedCoffee: [],
  isLoading: true,
  type: 'hot',
  setType: () => null,
  selectedCoffeeId: 0,
  setSelectedCoffeeId: () => null,
  width: '160px',
  setWidth: () => null,
  hasImage: true,
  setHasImage: () => null,
  selectedCoffee: undefined,
  setSelectedCoffee: () => null,
});

export const CoffeeProvider = ({ children }: { children: ReactNode }) => {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [icedCoffee, setIcedCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [type, setType] = useState<string>('hot');
  const [selectedCoffeeId, setSelectedCoffeeId] = useState<number>(0);
  const [width, setWidth] = useState<string>('160px');
  const [hasImage, setHasImage] = useState<boolean>(true);
  const [selectedCoffee, setSelectedCoffee] = useState<ICoffee>();

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

  useEffect(() => {
    if (!isLoading) {
      const coffee = (type === 'hot' ? hotCoffee : icedCoffee)[selectedCoffeeId];
      setSelectedCoffee(coffee);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, selectedCoffeeId]);

  const value = {
    hotCoffee,
    icedCoffee,
    isLoading,
    type,
    setType,
    selectedCoffeeId,
    setSelectedCoffeeId,
    width,
    setWidth,
    hasImage,
    setHasImage,
    selectedCoffee,
    setSelectedCoffee,
  };

  return <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>;
};
