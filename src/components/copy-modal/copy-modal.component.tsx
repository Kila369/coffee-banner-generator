import close from '../../../public/close.svg';
import Button from '../button/button.component';

function CopyModal({selectedCoffee, width,setModal, hasImage}) {

    const widthNum = width.split('p')[0];
    // Alternative approach
    // console.log(document.getElementById('coffee-card')?.outerHTML)


    const ingridientsArray = selectedCoffee.ingredients.map((ingredient) => `<span class="coffee-ingredient">${ingredient}</span>`).join('');

    const htmlString =`<div class="coffee-container">
        <div class="coffee-header">
            <h3>${selectedCoffee.title}</h3>
        </div>
        <div class="coffee-body">
          <div class="coffee-content">
              <p>${selectedCoffee.description}</p>
              ${hasImage && '<img src="${selectedCoffee.image}" alt="Coffee Image" class="coffe-image">'}
          </div>
          <div class="coffee-ingredients">
              ${ingridientsArray}
          </div>
        </div>
</div>`
    
    const cssString = `.coffee-container {
        width: ${width};
        border: 2px solid #424243;
        border-radius: 10px;
        height: 400px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      
      .coffee-header {
        background-color: #424243;
        padding: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-weight: bold;
        font-size: 20px;
        color: white;
      }

      .coffee-body{
        padding: 16px;
        overflow-y: scroll;
        height: 100%;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space between;
      }
      
      .coffee-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        gap: 8px;
        flex: direction: ${widthNum < 300 ? "column-reverse" : "row"}
      }
      
      .coffee-image img {
        max-height: 200px;
        object-fit: cover;
        ${widthNum < 300 ? 'width: 100%' : 'width:30%'}
      }
      
      .coffee-ingredients{
        display: flex;
        gap: 4px;
        ${widthNum< 350 && 'flex-direction: column'}
      }

      .coffee-ingredients .coffee-ingredient {
        background-color: #11A0DB;
        padding: 4px 8px;
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
                    <div className='w-[150px]'>
                    <Button onClick={() => navigator.clipboard.writeText(htmlString + "\n\n<style>\n" + cssString +"\n</style>")} className='z-[1] cursor-pointer'>Copy to clipboard</Button>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default CopyModal