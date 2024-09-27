import Image from "next/image";

const BlogCard = ({ data }) => {
  const { title, photo, createdAt, createdBy } = data;

  console.log(data);

  return (
    <div className="p-3 border rounded-2xl flex flex-col gap-2">
      <Image
        width={100000}
        height={100000}
        src={photo}
        className="w-full h-48 object-cover rounded-xl overflow-hidden"
      />

      <div className="flex flex-col gap-4 p-2">
        <h2 className="text-xl">{title}</h2>
        <div className="flex items-center gap-3">
          <Image
            width={100000}
            height={100000}
            src={photo}
            className="w-7 h-7 object-cover rounded-full overflow-hidden"
          />
          <p>{createdBy}</p>
          <p className="ml-auto">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
