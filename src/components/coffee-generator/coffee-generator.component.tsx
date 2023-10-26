import { useContext, useState, ChangeEvent, useEffect } from 'react'

import StepCard from '../step-card/step-card.component';
import CoffeeCard from '../coffee-card/coffee-card.component';
import { CoffeeContext, ICoffee } from '../../contexts/coffee.context';
import Button from '../button/button.component';
import RadioInput from '../../radio-input/radio-input.component';
import CopyModal from '../copy-modal/copy-modal.component';

// type CoffeeType = "hot" | "iced";

function CoffeeGenerator() {
    const [type, setType] = useState<string>("hot");
    const [selectedCoffeeId, setSelectedCoffeeId] = useState<number>(0);
    const [step, setStep] = useState<number>(1);
    const [width, setWidth] = useState<number | string>("160px");
    const [modal, setModal] = useState<boolean>(false);

    const {icedCoffee, hotCoffee, isLoading} = useContext(CoffeeContext);

    const [selectedCoffee, setSelectedCoffee] = useState<ICoffee>();

    useEffect(() => {
        if(!isLoading){
            const coffee = (type === "hot" ? hotCoffee : icedCoffee)[selectedCoffeeId]
            setSelectedCoffee(coffee)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoading, selectedCoffeeId])


    if(isLoading || !selectedCoffee){
        return <div>Loading</div>
    }

    const handleCoffeeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setSelectedCoffeeId(e.target.value)
    } 

    const handleCoffeeTypeChange = ( value: string ) => {
        setType(value);
        setSelectedCoffeeId(0);
    }

  return (
    <div className='flex flex-col lg:flex-row justify-between py-8'>
        <div className='flex flex-col gap-4 w-full sm:w-[40%]'>
            <StepCard title='Select your coffee' stepNumber={1}>
                <div>
                    <RadioInput value="hot" disabled={step!= 1} checked={type ==="hot"} handleChange={handleCoffeeTypeChange} label="Hot coffee" name='coffeeType' />
                    <RadioInput value="iced" disabled={step!= 1} checked={type ==="iced"} handleChange={handleCoffeeTypeChange} label="Iced coffee" name='coffeeType' />
                </div>
                <select disabled={step != 1} className='py-2 px-4 rounded w-[100%] border-lightGray border-2' value={selectedCoffeeId} onChange={e => handleCoffeeSelect(e)}
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
                    <RadioInput value={"160px"} disabled={step!= 2} checked={width == "160px"} handleChange={setWidth} label="160px" name='width' />
                    <RadioInput value={"300px"} disabled={step!= 2} checked={width == "300px"} handleChange={setWidth} label="300px" name='width' />
                    <RadioInput value="100%" disabled={step!= 2} checked={width == "100%"} handleChange={setWidth} label="Full width" name='width' />
                    <RadioInput value={"350px"} disabled={step!= 2} checked={width == "350px"} handleChange={setWidth} label="px" name='width' labelType='input' />
                </div>
                <div className='w-[30%] self-end'>
                    <Button onClick={() => setStep(3)} disabled={step != 2}>Next Step</Button>
                </div>
            </StepCard>

            <StepCard title='Choose your width' stepNumber={2}>
                <div>
                    <label htmlFor="title" className={`mb-3 block text-darkGray`}>
                        Title
                    </label>
                    <input
                        disabled={step != 3}
                        id="title"
                        type="text"
                        onChange={(e) => setSelectedCoffee({...selectedCoffee, title: e.target.value})}
                        value={selectedCoffee.title}
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
                        onChange={(e) => setSelectedCoffee({...selectedCoffee, description: e.target.value})}
                        value={selectedCoffee.description}
                        className={`w-full rounded-md border py-3 px-2 text-base font-normal text-black outline-none 
                        focus:border-darkBlue focus:shadow-md ${step != 3 ? 'border-lightGray text-textGray' : 'border-darkGray'}`}
                    />
                </div>
                <div className='w-[35%] self-end'>
                    <Button onClick={() => setModal(true)} disabled={step != 3}>View and copy code</Button>
                </div>
            </StepCard>
        </div>
        
        <div className='w-full mt-4 sm:mt-0 sm:w-[50%] flex justify-end'>
            <CoffeeCard selectedCoffee={selectedCoffee} width={width} />
        </div>

        {modal && <CopyModal selectedCoffee={selectedCoffee} width={width} setModal={setModal} />}
    </div>
  )
}

export default CoffeeGenerator