interface StepCardProps {
    title: string;
    stepNumber: number;
    children: React.ReactNode
  }

function StepCard({title ,stepNumber, children } : StepCardProps) {
  return (
    <div className='w-full my-2 rounded-lg shadow-lg'>
        <div className='px-4 py-2 m-0 text-xl font-bold text-white rounded-t-lg bg-darkGray'>
            <h3>{stepNumber}. {title}</h3>
        </div>
        <div className='flex flex-col gap-4 px-4 py-4'>
            {children}
        </div>
    </div>
  )
}

export default StepCard