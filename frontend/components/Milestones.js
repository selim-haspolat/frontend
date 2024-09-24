import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

const Milestones = () => {
  const milestonesData = [
    {
      title: "Successful Projects",
      count: "80+",
    },
    {
      title: "Client Satisfaction Rate",
      count: "98%",
    },
    {
      title: "Clients from Countries",
      count: "15+",
    },
    {
      title: "Years of Innovation",
      count: "7+",
    },
  ];

  return (
    <div className="flex py-10">
      <div className="flex flex-1 flex-wrap">
        {milestonesData.map((milestone, index) => (
          <div
            key={index}
            className="w-1/2 flex flex-col items-start justify-start p-5"
          >
            <p className="text-5xl font-bold">{milestone.count}</p>
            <p>{milestone.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-around items-start">
        <h2 className="text-5xl font-semibold">Our Milestones</h2>
        <p>
          Over the years, we’ve successfully delivered innovative solutions to
          clients across various industries. Here’s a glimpse of what we’ve
          accomplished so far.
        </p>
        <Button variant="ghost" animation={false} className={"!p-0"}>
          <p className="flex items-center gap-2">
            Learn More <GoArrowRight size={18} />{" "}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Milestones;
