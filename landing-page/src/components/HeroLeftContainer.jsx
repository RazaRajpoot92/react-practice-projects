import { ArrowUpRight } from 'lucide-react';

const HeroLeftContainer = () => {
  return (
    <div className=' flex flex-col justify-between w-[40%]'>
        <div className='mt-4'>
            <h1 className='font-bold text-5xl text-gray-800 leading-[1.1] mb-4'>Prospective  <span className='text-violet-500'>customer</span> segmentation </h1>
            <p className='text-gray-700 text-sm leading-[1.6]'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque? elit. Cum, numquam a! Delectus nemo, repellat quidem maiores consequuntur nihil nisi laboriosam.</p>
        </div>

        <ArrowUpRight size={90} />
    </div>
  )
}

export default HeroLeftContainer