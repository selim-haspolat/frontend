import Image from "next/image";

const CompaniesList = () => {
  const companies = [
    {
      image:
        "https://www.logolynx.com/images/logolynx/s_10/101d1b4c3ea939808af44206ae59148e.png",
      alt: "Spotify",
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_a7/a7ba5c379a71503431072a39234dd297.png",
      alt: "Google"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_78/78ab806c82822e6f9dc05f6c9a704422.png",
      alt: "Microsoft"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_e4/e431e75716cc7c03a515b9f233324692.png",
      alt: "Netflix"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_17/17c9cf11a39753676beecbad6bac81f9.png",
      alt: "Shopify"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_e3/e336bcdd12761f203f434e00d09c3ed6.jpeg",
      alt: "PayPal"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_85/85e5aab0741218d43ca0d1f109d5f6b1.png",
      alt: "Amazon"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_13/130a12e578d43ce19931a279b434d475.png",
      alt: "Adobe"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_74/74898e7eaa6d8fef47661a35eb2730c0.png",
      alt: "Airbnb"
    },
    {
      image: "https://www.logolynx.com/images/logolynx/s_a9/a9f4a4cf62540478c0ab42aee2794dbf.png",
      alt: "Asana"
    },
  ];

  return (
    <div className="py-10 bg-gray-50 flex flex-col items-center gap-14 rounded-xl">
      <h2 className="text-4xl font-medium">Companies We Collaborate With</h2>
      <div className="flex gap-x-32 gap-y-16 justify-center flex-wrap">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.image}
            alt={company.alt}
            width={1000} // Orijinal genişliği kullanmak
            height={1000}
            className="w-28 aspect-[4/2] object-contain mix-blend-darken"
            quality={100} // Kaliteyi maksimize etmek için
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
