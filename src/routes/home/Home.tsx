import CoffeeGenerator from '../../components/coffee-generator/CoffeeGenerator'

function Home() {
  return (
    <div className='text-darkGray py-4 px-12'>
        <h1 className='text-2xl font-bold mb-1'>Welcome to the ThinkIT Coffee Banner Generator</h1>
        <p>With this tool you are able to quickly craft your ideal coffee! Choose your blend and customize every detail for a captivating brew display.</p>
        <p className='text-lg mb-1'>Simply complete the three easy steps below and see your preview update as you go. Then view, copy and paste.</p>
        <CoffeeGenerator />
    </div>
  )
}

export default Home