import CoffeeGenerator from '../../components/coffee-generator/CoffeeGenerator';

function Home() {
  return (
    <div className="px-12 py-4 text-darkGray">
      <h1 className="mb-1 text-2xl font-bold">Welcome to the ThinkIT Coffee Banner Generator</h1>
      <p>
        With this tool you are able to quickly craft your ideal coffee! Choose your blend and customize every detail for a captivating brew
        display.
      </p>
      <p className="mb-1 text-lg">
        Simply complete the three easy steps below and see your preview update as you go. Then view, copy and paste.
      </p>
      <CoffeeGenerator />
    </div>
  );
}

export default Home;
