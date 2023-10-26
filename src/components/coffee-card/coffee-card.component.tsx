import { ICoffee } from "../../contexts/coffee.context";

interface CoffeeCardProps {
    selectedCoffee: ICoffee;
    width: string | number;
  }

function CoffeeCard({selectedCoffee, width}: CoffeeCardProps) {
  return (
    <div className='w-1/4 rounded-lg shadow-lg h-[400px] border-darkGray border-2' style={{width: width}}>
      <div className='bg-darkGray m-0 rounded-t-lg py-2 px-4 font-bold text-xl text-white'>
          <h3>{selectedCoffee.title}</h3>
      </div>
      <div className='p-4 overflow-y-scroll h-full max-h-[350px] flex flex-col justify-between'>
          <div className={`flex  gap-2 ${width === "160px" ? "flex-col-reverse" : "flex-row"}`}>
                  <p>{selectedCoffee.description}</p>
              <img src={selectedCoffee.image} className={`w-[30%] max-h-[300px] object-cover ${width === "160px" && "w-full"}`} />
          </div>
          <div className='flex gap-1'>
              {selectedCoffee.ingredients.map((ingredient) => <span className='bg-lightBlue px-2 py-1 rounded'>{ingredient}</span>)}
          </div>
      </div>
    </div>
  )
}

export default CoffeeCard