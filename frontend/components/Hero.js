import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="bg-hero-pattern flex-1 bg-cover bg-center">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-8xl font-bold leading-[1.1]">Digital Solutions</h1>
          <p className="text-gray-500">
            We craft meaningful identities that leave a lasting impression on
            your audience
          </p>
          <Button className={'mt-5'}>Get Started</Button>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src="https://media.istockphoto.com/id/904337698/de/vektor/design-studio-team-entwurf-zeichnung-grafik-design-kreativit%C3%A4t-ideen-flache-vektor.jpg?s=612x612&w=0&k=20&c=TlrR2pCrAO3hWG3R5-tWXVVooabBPSodTCcl06QGmG0="
          alt="random image"
          width={612} // Orijinal genişliği kullanmak
          height={612}
          className="w-full"
          quality={100} // Kaliteyi maksimize etmek için
        />
      </div>
    </div>
  );
};

export default Hero;
