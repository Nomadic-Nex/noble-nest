import React from 'react'
import Image from 'next/image';
import {images} from "../utils/image";
import Right from "../public/right.png";
import Left from "../public/left.png";


const PropertyCarousel = () => {
  return (
    <div>
        <div className='absolute top-3 w-full flex justify-end items-end'>
            <div className='absolute top-2 left-10 cursor-pointer'>
                <Image
                    src={Left}
                    width={45}
                    height={45}
                    alt='arrow'
                />
            </div>
            <div className='absolute top-2 left-2 cursor-pointer'>
                <Image
                    src={Right}
                    width={45}
                    height={45}
                    alt='arrow'
                />
            </div>
        </div>
        <div className='grid place-items-center grid-cols-3 w-full mx-auto rounded-3xl'>
            <div className='w-full flex justify-center items-center gap-4 rounded-2xl'>
                {images.map((pics , img)=>(
                    <div key={img} className='w-[447px] h-[438px] bg-gradient-to-br from-slate-300 via-white to-orange-200 flex flex-col items-center justify-center p-4 border-2 border-gray-300'>
                        <Image
                            src={pics.src}
                            width={447}
                            height={263}
                            alt='prop'
                        />
                        <div className='text-center text-lg text-black font-medium mt-2'>
                            {pics.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PropertyCarousel;
