import { useContext, useState, ChangeEvent } from 'react'

import StepCard from '../step-card/step-card.component';
import { CoffeeContext } from '../../contexts/coffee.context';
import Button from '../button/button.component';
import RadioInput from '../../radio-input/radio-input.component';

// type CoffeeType = "hot" | "iced";

function CoffeeGenerator() {
    const [type, setType] = useState<string>("hot");
    const [selectedCoffee, setSelectedCoffee] = useState<number>(0);
    const [step, setStep] = useState<number>(1);
    const [width, setWidth] = useState<number | string>(160);

    const {icedCoffee, hotCoffee, isLoading} = useContext(CoffeeContext);


    if(isLoading){
        return <div>Loading</div>
    }

    const handleCoffeeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setSelectedCoffee(e.target.value)
    } 

    const handleCoffeeTypeChange = ( value: string ) => {
        setType(value);
        setSelectedCoffee(0);
    }

    console.log(width);

  return (
    <div className='flex flex-col gap-4 py-8'>
        <StepCard title='Select your coffee' stepNumber={1}>
            <div>
                <RadioInput value="hot" disabled={step!= 1} checked={type ==="hot"} handleChange={handleCoffeeTypeChange} label="Hot coffee" name='coffeeType' />
                <RadioInput value="iced" disabled={step!= 1} checked={type ==="iced"} handleChange={handleCoffeeTypeChange} label="Iced coffee" name='coffeeType' />
            </div>
            <select disabled={step != 1} className='py-2 px-4 rounded w-[100%] border-lightGray border-2' value={selectedCoffee} onChange={e => handleCoffeeSelect(e)}
>
                {
                    (type === "hot" ? hotCoffee: icedCoffee).map((coffee, i) => <option key={i} value={i}>{coffee.title}</option>)
                }
            </select>
            <div className='w-[30%] self-end'>
                <Button onClick={() => setStep(2)} disabled={step != 1}>Next Step</Button>
            </div>
        </StepCard>

        <StepCard title='Choose your width' stepNumber={2}>
            <div>
                 <RadioInput value={160} disabled={step!= 2} checked={width == 160} handleChange={setWidth} label="160px" name='width' />
                 <RadioInput value={300} disabled={step!= 2} checked={width == 300} handleChange={setWidth} label="300px" name='width' />
                 <RadioInput value="full" disabled={step!= 2} checked={width == "full"} handleChange={setWidth} label="Full width" name='width' />
                 <RadioInput value={350} disabled={step!= 2} checked={width == 350} handleChange={setWidth} label="Custom" name='width' />
            </div>
            <div className='w-[30%] self-end'>
                <Button onClick={() => setStep(3)} disabled={step != 2}>Next Step</Button>
            </div>
        </StepCard>
    </div>
  )
}

export default CoffeeGenerator