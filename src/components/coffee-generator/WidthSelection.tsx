import { useContext } from 'react';

import { CoffeeContext } from '../../contexts/CoffeeContext';

import Button from '../button/Button';
import StepCard from '../../components/step-card/StepCard';
import RadioInput from '../radio-input/RadioInput';

function WidthSelection({ step, setStep }: { step: number; setStep: (arg: number) => void }) {
  const { width, setWidth, hasImage, setHasImage } = useContext(CoffeeContext);

  return (
    <StepCard title="Choose your width" stepNumber={2}>
      <div>
        <RadioInput value={'160px'} disabled={step != 2} checked={width == '160px'} handleChange={setWidth} label="160px" name="width" />
        <RadioInput value={'300px'} disabled={step != 2} checked={width == '300px'} handleChange={setWidth} label="300px" name="width" />
        <RadioInput value="100%" disabled={step != 2} checked={width == '100%'} handleChange={setWidth} label="Full width" name="width" />
        <RadioInput
          value={'350px'}
          disabled={step != 2}
          checked={width == '350px'}
          handleChange={setWidth}
          label="custom"
          width={width}
          name="width"
          labelType="input"
        />
      </div>
      <div className="flex items-center gap-1">
        <input
          disabled={step != 2}
          id="hasImage"
          type="checkbox"
          name="scales"
          checked={hasImage}
          onChange={() => setHasImage(!hasImage)}
          // className={`w-full rounded-md border py-3 px-2 text-base font-normal text-black outline-none
          // focus:border-darkBlue focus:shadow-md ${step != 3 ? 'border-lightGray text-textGray' : 'border-darkGray'}`}
        />
        <label htmlFor="hasImage" className={`mb-3 block text-darkGray my-2`}>
          Has Image
        </label>
      </div>
      <div className="w-[30%] self-end">
        <Button onClick={() => setStep(3)} disabled={step != 2}>
          Next Step
        </Button>
      </div>
    </StepCard>
  );
}

export default WidthSelection;
