interface StepCardProps {
    title: string;
    stepNumber: number;
    children: React.ReactNode
  }

function StepCard({title ,stepNumber, children } : StepCardProps) {
  return (
    <div className='w-full rounded-lg shadow-lg my-2'>
        <div className='bg-darkGray m-0 rounded-t-lg py-2 px-4 font-bold text-xl text-white'>
            <h3>{stepNumber}. {title}</h3>
        </div>
        <div className='px-4 py-4 flex flex-col gap-4'>
            {children}
        </div>
    </div>
  )
}

export default StepCard