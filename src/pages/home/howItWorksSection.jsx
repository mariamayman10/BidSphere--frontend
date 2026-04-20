import { GavelIcon, HandPointingIcon, TrophyIcon } from "@phosphor-icons/react";
import SectionHeader from "./sectionHeader";

const steps = [
  {
    name: "Sign In",
    icon: <HandPointingIcon size={32} />,
    description: "Access live auctions",
  },
  {
    name: "Bid",
    icon: <GavelIcon size={32} />,
    description: "Compete in real time bidding",
  },
  {
    name: "Win",
    icon: <TrophyIcon size={32} />,
    description: "Win exclusive items",
  },
];

function HowItWorksSection() {
  return (
    <div className="pt-20 xl:px-20 md:px-15 px-10">
      <SectionHeader title="How It Works" />
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <div key={step.name} className="min-w-50 flex flex-col items-center">
            <div className="flex justify-center items-center w-20 h-20 rounded-[50%] bg-surface-200 mb-5">
              {step.icon}
            </div>
            <p className="text-xl font-bold mb-4">{step.name}</p>
            <p className="text-md text-center text-surface-400 font-light">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksSection;
