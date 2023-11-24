import { useContext, useState } from 'react';

// Used here absolute imports, ts throw errors although it works on npm run dev
// import CoffeeCard from '@/components/coffee-card/CoffeeCard';
import CoffeeCard from '../../components/coffee-card/CoffeeCard';

import { CoffeeContext } from '../../contexts/CoffeeContext';
import CopyModal from '../copy-modal/CopyModal';
import CoffeeSelection from './CoffeeSelection';
import WidthSelection from './WidthSelection';
import TextCustomizer from './TextCustomizer';

function CoffeeGenerator() {
  const [step, setStep] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);

  const { isLoading, selectedCoffee } = useContext(CoffeeContext);

  if (isLoading || !selectedCoffee) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-col justify-between py-8 lg:flex-row">
      <div className="w-full sm:w-[40%]">
        <CoffeeSelection step={step} setStep={setStep} />

        <WidthSelection step={step} setStep={setStep} />

        <TextCustomizer step={step} setStep={setStep} setModal={setModal} />
      </div>

      <div className="w-full mt-4 sm:mt-0 sm:w-[50%] flex justify-end">
        <div>
          <p className="self-start mb-4 text-xl font-bold text-darkBlue">Preview:</p>
          <CoffeeCard />
        </div>
      </div>

      {modal && <CopyModal setModal={setModal} />}
    </div>
  );
}

export default CoffeeGenerator;
