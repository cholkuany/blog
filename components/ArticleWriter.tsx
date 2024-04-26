import Image from "next/image"
import Date from './date';

function Author({date, name}:{date: string, name: string}) {
  return (
        <div className='flex gap-2 items-center'>
            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border border-gray-200'>
                <Image
                    src={'/46662114-251E-4C4A-A808-03CCE230A68B_1_105_c.jpeg'}
                    width={40}
                    height={40}
                    alt='profile image'
                    className='w-full h-full rounded-full'
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className='flex flex-col mt-4 text-gray-800 dark:text-gray-800'>
                <div className='text-sm font-bold'>{name}</div>
                <Date dateString={date} />
            </div>
        </div>
  )
}

export default Author