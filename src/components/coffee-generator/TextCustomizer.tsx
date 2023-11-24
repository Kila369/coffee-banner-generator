import { useContext } from 'react';

import { CoffeeContext, ICoffee } from '../../contexts/CoffeeContext';

import Button from '../button/Button';
import StepCard from '../../components/step-card/StepCard';

function TextCustomizer({ step, setStep, setModal }: { step: number; setStep: (arg: number) => void; setModal: (arg: boolean) => void }) {
  const { selectedCoffee, setSelectedCoffee, setSelectedCoffeeId, setWidth, setType, setHasImage } = useContext(CoffeeContext);

  const handleReset = () => {
    setSelectedCoffeeId(0);
    setStep(1);
    setWidth('160px');
    setType('hot');
    setHasImage(true);
  };

  return (
    <StepCard title="Customize title and description" stepNumber={3}>
      <div>
        <label htmlFor="title" className={`mb-3 block text-darkGray`}>
          Title
        </label>
        <input
          disabled={step != 3}
          id="title"
          type="text"
          onChange={e => setSelectedCoffee({ ...selectedCoffee, title: e.target.value } as ICoffee)}
          value={selectedCoffee?.title}
          className={`w-full rounded-md border py-3 px-2 text-base font-normal text-black outline-none 
                        focus:border-darkBlue focus:shadow-md ${step != 3 ? 'border-lightGray text-textGray' : 'border-darkGray'}`}
        />
      </div>
      <div>
        <label htmlFor="description" className={`mb-3 block text-darkGray`}>
          Description
        </label>
        <textarea
          disabled={step != 3}
          id="description"
          onChange={e => setSelectedCoffee({ ...selectedCoffee, description: e.target.value } as ICoffee)}
          value={selectedCoffee?.description}
          className={`w-full rounded-md border py-3 px-2 text-base font-normal text-black outline-none 
                        focus:border-darkBlue focus:shadow-md ${step != 3 ? 'border-lightGray text-textGray' : 'border-darkGray'}`}
        />
      </div>
      <div className="flex self-end justify-between w-full">
        <div>
          <Button onClick={() => handleReset()} disabled={step != 3} inverted>
            Start Over
          </Button>
        </div>
        <div>
          <Button onClick={() => setModal(true)} disabled={step != 3}>
            View and copy code
          </Button>
        </div>
      </div>
    </StepCard>
  );
}

export default TextCustomizer;
