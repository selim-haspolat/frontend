import formatISODate from "@/helper/date-converter";
import Image from "next/image";
import Link from "next/link";

import ImageRef from "@/helper/image-ref";

const BlogCard = ({ blog }) => {
  const { title, imagePath, createdAt, createdBy, _id } = blog;

  return (
    <Link href={`/blogs/${_id}`}>
      <div className="p-3 border rounded-2xl flex flex-col gap-2 h-96 cursor-pointer">
        <Image
          width={100000}
          height={100000}
          src={ImageRef(imagePath)}
          className="w-full h-48 object-cover rounded-xl overflow-hidden"
          alt={title}
        />

        <div className="flex flex-col gap-4 p-2 grow">
          <h2 className="text-xl break-all line-clamp-3">{title}</h2>
          <div className="flex items-center gap-3 justify-end mt-auto">
            <Image
              width={100000}
              height={100000}
              src={ImageRef(imagePath)}
              alt={title}
              className="w-7 h-7 object-cover rounded-full overflow-hidden"
            />
            <p>{createdBy}</p>
            <p className="ml-auto text-gray-600">{formatISODate(createdAt)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
