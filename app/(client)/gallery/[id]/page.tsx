import CloudinaryImage from '../cloudinaryImage';
import cloudinary from 'cloudinary'
import Link from 'next/link';
import { ImageType } from '@/lib/definitions';

export default async function Page({params }: {params: {id: string}}) {
    const id = params.id

    const image = (await cloudinary.v2.search.expression(`resource_type:image AND asset_id=${id}`)
    .execute()
    .then(({resources}: {resources: ImageType[]}) => resources[0]))

    return (
        <div className='relative flex flex-col items-center justify-between w-full h-full m-auto'>
            <Link href='/gallery' className='absolute top-[-16px] right-1 flex col justify-center items-center h-8 w-8 z-50 bg-pink-600 rounded-full hover:bg-pink-800 p-2 text-white shadow-sm shadow-slate-800'>
                X
            </Link>
            
            <div className='relative flex flex-col justify-between md:flex-row mt-5 gap-5 shadow-sm shadow-slate-300 md:rounded-md overflow-hidden m-auto w-full h-full'>
                <div className='w-full flex-1 md:col-span-3 h-full'>
                    <CloudinaryImage 
                        secure_url={image.secure_url} 
                        filename={image.filename} 
                        height='h-full' 
                        objectFit='object-cover' 
                        aspectRatio='aspect-[12/10] md:aspect-square'
                    />
                </div>
            </div>
        </div>
    )
}