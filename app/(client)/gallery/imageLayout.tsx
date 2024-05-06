
import CloudinaryImage from "./cloudinaryImage";
import cloudinary from 'cloudinary';
import Link from "next/link";
import { ImageType } from "@/lib/definitions";

export default async function ImagesLayout() {

// const images = (await cloudinary.v2.search
//     .expression('folder:cholkuany')
//     .sort_by('created_at','desc')
//     .max_results(30)
//     .execute()
//     .then(({resources}: {resources: ImageType[]}) => resources ))
const images = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .max_results(30)
    .execute()
    .then(({resources}: {resources: ImageType[]}) => resources ))

  return (
    <div className="columns-2 md:columns-4 lg:columns-6 gap-[1px]">
        {images.map((image) =>(
          <div className="flex flex-col w-full mb-[1px]" key={image.asset_id}>
            <Link href={`gallery/${image.asset_id}`} className="flex w-full">
              <CloudinaryImage 
                secure_url={image.secure_url} 
                filename={image.filename} 
                height='h-full'
                objectFit='object-cover' 
                aspectRatio='aspect-auto md:aspect-[12/10]'
               />
            </Link>
          </div>
        ))}
    </div>
  );
}







