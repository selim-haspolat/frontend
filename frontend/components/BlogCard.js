import formatISODate from "@/helper/date-converter";
import Image from "next/image";

const BlogCard = ({ data }) => {
  const { title, photo, createdAt, createdBy } = data;

  console.log(data);

  return (
    <div className="p-3 border rounded-2xl flex flex-col gap-2 h-96">
      <Image
        width={100000}
        height={100000}
        src={photo}
        className="w-full h-48 object-cover rounded-xl overflow-hidden"
        alt={title}
      />

      <div className="flex flex-col gap-4 p-2 grow">
        <h2 className="text-xl break-all line-clamp-3">{title}</h2>
        <div className="flex items-center gap-3 justify-end mt-auto">
          <Image
            width={100000}
            height={100000}
            src={photo}
            alt={title}
            className="w-7 h-7 object-cover rounded-full overflow-hidden"
          />
          <p>{createdBy}</p>
          <p className="ml-auto text-gray-600">{formatISODate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
