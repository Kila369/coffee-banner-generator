import CoffeeGenerator from '../../components/coffee-generator/coffee-generator.component'

function Home() {
  return (
    <div className='text-darkGray py-4 px-12'>
        <h1>Welcome to the ThinkIT Coffee Banner Generator</h1>
        <p>With this tool you are able to quickly craft your ideal coffee! Choose your blend and customize every detail for a captivating brew display.</p>
        <p>Simply complete the three easy steps below and see your preview update as you go. Then view, copy and paste.</p>
        <CoffeeGenerator />
    </div>
  )
}

export default Home