import { ICoffee } from "../../contexts/CoffeeContext";

interface CoffeeCardProps {
    selectedCoffee: ICoffee;
    width: string;
    hasImage: boolean;
  }

function CoffeeCard({selectedCoffee, width, hasImage}: CoffeeCardProps) {
  const widthNum = parseInt(width.split('p')[0]);

  return (
    <div className='w-1/4 rounded-lg shadow-lg h-[400px] border-darkGray border-2' style={{width: width}} id="coffee-card">
      <div className='px-4 py-2 m-0 text-xl font-bold text-white rounded-t-lg bg-darkGray'>
          <h3>{selectedCoffee.title}</h3>
      </div>
      <div className='p-4 overflow-y-scroll h-full max-h-[350px] flex flex-col justify-between'>
          <div className={`flex flex-1 gap-2 ${widthNum < 300 ? "flex-col-reverse" : "flex-row"}`}>
              <p>{selectedCoffee.description}</p>
              { hasImage &&
              <img src={selectedCoffee.image} className={`w-[30%] max-h-[200px] object-cover ${widthNum < 300 && "w-full"}`} />
              }
          </div>
          <div className={`flex gap-1 ${widthNum < 350 && 'flex-col'}`}>
              {selectedCoffee.ingredients.map((ingredient) => <span key={ingredient} className='px-2 py-1 rounded bg-lightBlue'>{ingredient}</span>)}
          </div>
      </div>
    </div>
  )
}

export default CoffeeCard