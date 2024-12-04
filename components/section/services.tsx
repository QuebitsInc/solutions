import React from "react";

const Services = () => {
  const services = [
    "Plumbing",
    "Power Washing",
    "Door Installation",
    "Cleaners",
    "Property Management",
    "HVAC",
    "Handyman",
    "Renovations",
    "Appliances",
    "Landscaping",
    "Window Installation",
    "ADU Conversions",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 w-full py-10 md:py-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <Headline title="Services we offer" />
          <Title
            title="Get free quotes from trusted experts 
for your next project."
          />
        </div>
        <div className="max-w-5xl mx-auto mt-8  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {services.map((item) => (
            <div
              key={item}
              className="bg-background w-full p-4 text-xs rounded-md text-center "
            >
              {item}
            </div>
          ))}
        </div>
        <a href="#contact">
          <button className="bg-transparent text-sm md:text-base shadow-none flex flex-row gap-4 items-center text-blck px-8 py-6 w-fit rounded-md">
            Get Free Quote
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="29" height="29" rx="14.5" fill="#065C62" />
              <path
                d="M21.5525 15.5505C21.8565 15.2453 21.8556 14.7515 21.5505 14.4474L16.5775 9.49264C16.2723 9.18859 15.7785 9.18949 15.4744 9.49466C15.1704 9.79983 15.1713 10.2937 15.4764 10.5977L19.8969 15.002L15.4926 19.4224C15.1886 19.7276 15.1895 20.2215 15.4946 20.5255C15.7998 20.8296 16.2937 20.8286 16.5977 20.5235L21.5525 15.5505ZM8.00143 15.8038L21.0014 15.78L20.9985 14.22L7.99857 14.2438L8.00143 15.8038Z"
                fill="white"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services;

export const Headline = ({ title }: { title: string }) => (
  <h4 className="text-primary text-sm capitalize md:text-base font-semibold">
    {title}
  </h4>
);

export const Title = ({ title }: { title: string }) => (
  <h1 className=" text-xl md:text-3xl lg:text-4xl font-medium">{title}</h1>
);
