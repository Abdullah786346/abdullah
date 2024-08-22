import React from "react";

const Steps = ({ title }: { title: string }) => {
  const steps = [
    {
      number: 1,
      description: "Start by signing up or logging in using your social media accounts for a seamless experience.",
      icon: "assets/step1.svg",
      height: "11rem",
      paddingLeft: "0", 
    },
    {
      number: 2,
      description: "Choose the field that best represents your expertise or interest. Browse through a selection of templates tailored to your chosen field and pick the one that suits you best.",
      icon: "assets/step2.svg",
      height: "11rem",
      paddingLeft: "0", 
    },
    {
      number: 3,
      description: "Personalize your chosen template by adjusting the colors, sizes, and design elements to match your style and preferences.",
      icon: "assets/step3.svg",
      height: "14rem", 
      paddingLeft: "0", 
    },
    {
      number: 4,
      description: "Explore the pricing options and choose a plan that fits your needs. Once satisfied with your customization, publish your portfolio to showcase your work to the world.",
      icon: "assets/step4.svg",
      height: "14rem", 
      paddingLeft: "0",
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col bg-indigo-900 p-8">
      <h1 className="text-white text-5xl font-light text-center mb-16">
        {title}
      </h1>
      <div className="flex flex-col items-center space-y-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex w-full ${step.number % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className="bg-white rounded-lg p-8 flex items-center w-3/5 h-[16rem]"
              style={{ paddingLeft: step.paddingLeft }} 
            >
              <div className="flex-shrink-0 mr-4"> 
                <img
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  style={{ height: step.height }} 
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-indigo-800 text-2xl font-bold mb-4">Step {step.number}</h2>
                <hr className="border-t-2 border-blue-500 mb-4 w-[23%]" />
                <p className="text-gray-900 font-bold">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
