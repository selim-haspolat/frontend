import Image from "next/image";

import teamImage from "@/assets/undraw_Team_re_0bfe.png";
import teamImage2 from "@/assets/undraw_Team_spirit_re_yl1v.png";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4">
      <div className="col-span-2 row-span-1 flex flex-col justify-end gap-4">
        <h1 className="text-8xl font-semibold">About Us</h1>
        <div className="border"></div>
        <p>
          <span className="text-xl font-medium">Lorem</span> ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam eget arcu quis lacus rutrum
          tincidunt non eu dolor. Duis quis rutrum nisi, a sollicitudin nisl.
          Suspendisse tortor ipsum, pellentesque ut lorem eget, iaculis
          tincidunt augue. Mauris et porta velit.
        </p>
      </div>
      <div className="col-span-2 row-span-2">
        <Image height={10000} width={10000} className="w-fit" src={teamImage} alt="team image" />
      </div>
      <div className="col-span-2 row-span-2 flex items-center">
        <Image height={10000} width={10000} src={teamImage2}  alt="team image"/>
      </div>
      <div className="col-span-2 row-span-1 flex flex-col gap-4">
        <h1 className="text-8xl font-semibold">Team</h1>
        <div className="border"></div>
        <p>
          <span className="text-xl font-medium">Lorem</span> ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam eget arcu quis lacus rutrum
          tincidunt non eu dolor. Duis quis rutrum nisi, a sollicitudin nisl.
          Suspendisse tortor ipsum, pellentesque ut lorem eget, iaculis
          tincidunt augue. Mauris et porta velit.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
