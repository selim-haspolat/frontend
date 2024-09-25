import { TbBrandXFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  const socialMedia = [
    {
      name: "Instagram",
      icon: AiFillInstagram,
    },
    {
      name: "Facebook",
      icon: RiFacebookCircleFill, // Bu doğru Facebook ikonu olmalı
    },
    {
      name: "Twitter",
      icon: TbBrandXFilled, // Twitter için farklı bir ikon kullanabilirsin
    },
  ];

  const footerLinks = [
    {
      text: "Work With Us",
      url: "/work-with-us",
    },
    {
      text: "Private Coaching",
      url: "/private-coaching",
    },
    {
      text: "About Us",
      url: "/about-us",
    },
    {
      text: "Advertise With Us",
      url: "/advertise-with-us",
    },
    {
      text: "Our Work",
      url: "/our-work",
    },
    {
      text: "FAQs",
      url: "/faqs",
    },
    {
      text: "Support Us",
      url: "/support-us",
    },
    {
      text: "Our commitment",
      url: "/our-commitment",
    },
    {
      text: "Report a Bug",
      url: "/our-commitment",
    },
    {
      text: "Businness Advice",
      url: "/our-commitment",
    },
    {
      text: "Our Team",
      url: "/our-commitment",
    },
  ];

  return (
    <div className="flex p-10 rounded-xl bg-gray-50">
      <div className="flex-[4]">
        <div className="flex flex-col gap-10 w-1/2">
          <div>
            <h2 className="text-5xl font-bold">LOGO</h2>
          </div>
          <div className="flex justify-between">
            {socialMedia.map((social, index) => (
              // social.icon bir bileşen olduğu için büyük harfle çağırman gerekiyor
              <Button variant="ghost" animation={false} className={"!p-0"}>
                <social.icon key={index} size={30} className="text-primary" />
              </Button>
            ))}
          </div>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
      <div className="flex-[5] flex flex-wrap">
        {footerLinks.map((link, index) => (
          <div key={index} className="w-1/3">
            <Link href={link.url}>{link.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
