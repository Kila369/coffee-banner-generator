import { useContext, ChangeEvent } from 'react';

import { CoffeeContext } from '../../contexts/CoffeeContext';

import Button from '../button/Button';
import StepCard from '../../components/step-card/StepCard';
import RadioInput from '../radio-input/RadioInput';

function CoffeeSelection({ step, setStep }: { step: number; setStep: (arg: number) => void }) {
  const { type, setType, selectedCoffeeId, setSelectedCoffeeId } = useContext(CoffeeContext);

  const handleCoffeeTypeChange = (value: string) => {
    setType(value);
    setSelectedCoffeeId(0);
  };

  const handleCoffeeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setSelectedCoffeeId(parseInt(e.target.value));
  };

  const { icedCoffee, hotCoffee } = useContext(CoffeeContext);

  return (
    <StepCard title="Select your coffee" stepNumber={1}>
      <div>
        <RadioInput
          value="hot"
          disabled={step != 1}
          checked={type === 'hot'}
          handleChange={handleCoffeeTypeChange}
          label="Hot coffee"
          name="coffeeType"
        />
        <RadioInput
          value="iced"
          disabled={step != 1}
          checked={type === 'iced'}
          handleChange={handleCoffeeTypeChange}
          label="Iced coffee"
          name="coffeeType"
        />
      </div>
      <select
        disabled={step != 1}
        className="py-2 px-4 rounded w-[100%] border-lightGray border-2"
        value={selectedCoffeeId}
        onChange={e => handleCoffeeSelect(e)}>
        {(type === 'hot' ? hotCoffee : icedCoffee).map((coffee, i) => (
          <option key={i} value={i}>
            {coffee.title}
          </option>
        ))}
      </select>
      <div className="w-[30%] self-end">
        <Button onClick={() => setStep(2)} disabled={step != 1}>
          Next Step
        </Button>
      </div>
    </StepCard>
  );
}

export default CoffeeSelection;
