import {
  CameraIcon,
  CarIcon,
  DeviceMobileIcon,
  LaptopIcon,
  SketchLogoIcon,
  WatchIcon,
} from "@phosphor-icons/react";
import SectionHeader from "./sectionHeader";
import { Link } from "react-router-dom";

const categories = [
  { name: "Antiques", icon: <SketchLogoIcon size={40} /> },
  { name: "Mobiles", icon: <DeviceMobileIcon size={40} /> },
  { name: "Laptops", icon: <LaptopIcon size={40} /> },
  { name: "Vehicles", icon: <CarIcon size={40} /> },
  { name: "Watches", icon: <WatchIcon size={40} /> },
  { name: "Cameras", icon: <CameraIcon size={40} /> },
];

function CategoriesSection() {
  return (
    <div className="py-15 xl:px-20 md:px-15 px-10">
      <SectionHeader title="Auction Categories" />
      <div className="flex justify-center flex-wrap gap-5">
        {categories.map((c) => (
          <Link
            className="category-card h-37.5 w-37.5 rounded-[50%] flex flex-col items-center p-8"
            to={`/auctions?category=${c.name.toLocaleLowerCase()}`}
            key={c.name}
          >
            <p className="category-icon">{c.icon}</p>
            <p className="mt-3 font-medium text-lg">{c.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
