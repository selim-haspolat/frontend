import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <div className="bg-red-200">
        <div className="bg-hero-pattern bg-cover bg-center py-20">
            <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-white">Welcome to My Blog</h1>
            <p className="text-white mt-4">This is a blog where you can find all the information you need about web development</p>
            <Button>Start Now</Button>
            </div>
        </div>

        <div>
            <Image src={'https://cdn.pixabay.com/photo/2020/12/18/00/43/business-5840870_640.png'} alt='random image' width={100} height={100} />
        </div>
    </div>
  )
}

export default Hero