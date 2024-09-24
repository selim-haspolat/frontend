import Button from "./Button";

const Aafsga = () => {
  return (
    <div className="relative h-72 bg-custom-gradient rounded-xl overflow-hidden z-40">
      <div className="w-96 h-96 rounded-full absolute bg-primary top-[50%] translate-y-[-50%] left-[-270px] z-[-2]"></div>
      <div
        className="w-96 h-96 rounded-full absolute top-[50%] bg-[rgba(53,97,254,0.7)] translate-y-[-50%] left-[-100px] z-[-1]"
        style={{ boxShadow: "-40px 0 70px rgb(53,97,254) inset" }}
      ></div>
      <div
        className="w-96 h-96 rounded-full absolute top-[50%] translate-y-[-50%] left-[284px] z-[-1]"
        style={{ boxShadow: "70px 0 50px rgb(255,255,254,0.4) inset" }}
      ></div>
      <div className="flex gap-20 p-20 items-center text-white h-full">
        <div className="flex-1">
          <h3 className="text-7xl">Elevate Your Brand Today!</h3>
        </div>
        <div className="flex-1 flex flex-col items-start gap-10">
          <p>
            Ready to transform your digital dresence? Let's create magic
            together! book our services now!{" "}
          </p>
          <Button className='!bg-white !text-primary'>Book Call</Button>
        </div>
      </div>
    </div>
  );
};

export default Aafsga;
