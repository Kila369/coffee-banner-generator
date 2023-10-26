import close from '../../../public/close.svg';
import Button from '../button/button.component';

function CopyModal({selectedCoffee, width,setModal}) {

    const ingridientsArray = selectedCoffee.ingredients.map((ingredient) => `<span class="coffee-ingredient">${ingredient}</span>`).join('');

    const htmlString =`<div class="coffee-container">
        <div class="coffee-header">
            <h3>${selectedCoffee.title}</h3>
        </div>
        <div class="coffee-content">
            <div class="coffee-description">
                <p>${selectedCoffee.description}</p>
            </div>
            <div class="coffee-image">
                <img src="${selectedCoffee.image}" alt="Coffee Image">
            </div>
        </div>
        <div class="coffee-ingredients">
            ${ingridientsArray}
        </div>
</div>`
    
    const cssString = `.coffee-container {
        width: ${width};
        border: 2px solid #333;
        border-radius: 10px;
        height: 400px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      
      .coffee-header {
        background-color: #333;
        padding: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-weight: bold;
        font-size: 20px;
        color: white;
      }
      
      .coffee-content {
        padding: 10px;
        height: 100%;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .coffee-description {
        flex: 1;
        margin-bottom: 10px;
      }
      
      .coffee-image img {
        width: 30%;
        max-height: 300px;
        object-fit: cover;
      }
      
      .coffee-ingredients .coffee-ingredient {
        background-color: #add8e6;
        padding: 5px;
        margin-right: 5px;
        border-radius: 5px;
        display: inline-block;
      }`

    const htmlArray = htmlString.split('\n');
    const cssArray = cssString.split('\n');

    return (
        <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-[100] `}>
            <div className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%]" onClick={() => setModal(false)}></div>
            <div className="rounded lg:w-[1005px] lg:h-[700px] w-[90%] h-[95%] max-w-[1005px] sm:max-h-[700px] overflow-y-scroll relative bg-white shadow-[-2px_-2px_11px_0_rgba(171,171,171,0.15)] p-12">
                <div>
                    <h1 className='font-medium'>HTML</h1>
                    <br></br>
                    {htmlArray.map((el) => <p>{el}</p>)}
                </div>
                <br></br>
                <div>
                    <h1 className='font-medium'>CSS</h1>
                    <br></br>
                    {cssArray.map((el) => <p>{el}</p>)}
                </div>
                <div
                    className="absolute lg:left-[95%] sm:left-[90%] left-[85%] top-[5%] z-[1] w-[30px] h-[30px] cursor-pointer"
                    onClick={() => setModal(false)}>
                    <img src={close} alt="close" />
                </div>
                <div className='sticky bottom-0 flex justify-end'>
                    <Button onClick={() => navigator.clipboard.writeText(htmlString + "\n\n<style>\n" + cssString +"\n</style>")} className='z-[1] cursor-pointer w-[150px]'>Copy to clipboard</Button>
                </div>
            </div>
        </div>
      );
}

export default CopyModal