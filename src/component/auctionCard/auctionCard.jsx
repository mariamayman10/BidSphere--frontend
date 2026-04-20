import { useEffect, useState } from "react";
import InfoBar from "./infoBar";
import Timer from "./timer";
import {
  CameraIcon,
  CarIcon,
  DeviceMobileIcon,
  LaptopIcon,
  SketchLogoIcon,
  WatchIcon,
  ClockIcon,
  CheckCircleIcon,
  BroadcastIcon,
} from "@phosphor-icons/react";

const categories = {
  Antiques: {
    el: <SketchLogoIcon size={14} color="#C2410C" />,
    bg: "#FFF7ED",
    text: "#7C2D12",
  },
  Mobiles: {
    el: <DeviceMobileIcon size={14} color="#0891B2" />,
    bg: "#ECFEFF",
    text: "#164E63",
  },
  Laptops: {
    el: <LaptopIcon size={14} color="#2563EB" />,
    bg: "#EFF6FF",
    text: "#1E3A8A",
  },
  Vehicles: {
    el: <CarIcon size={14} color="#DC2626" />,
    bg: "#FEF2F2",
    text: "#7F1D1D",
  },
  Watches: {
    el: <WatchIcon size={14} color="#7C3AED" />,
    bg: "#F5F3FF",
    text: "#4C1D95",
  },
  Cameras: {
    el: <CameraIcon size={14} color="#4F46E5" />,
    bg: "#EEF2FF",
    text: "#312E81",
  },
};
const status = {
  LIVE: {
    el: <BroadcastIcon size={12} className="text-current" />,
    bg: "#ECFDF5",
    text: "#065F46",
  },
  UPCOMING: {
    el: <ClockIcon size={12} className="text-current" />,
    bg: "#EFF6FF",
    text: "#1E3A8A",
  },
  ENDED: {
    el: <CheckCircleIcon size={12} className="text-current" />,
    bg: "#F3F4F6",
    text: "#374151",
  },
};

function AuctionCard({ auction }) {
  const [now, setNow] = useState(0);
  const start = new Date(auction.startsAt).getTime();
  const end = new Date(auction.endsAt).getTime();

  function getStatus(now, startsAt, endsAt) {
    if (now < startsAt) return "UPCOMING";
    if (now >= startsAt && now < endsAt) return "LIVE";
    return "ENDED";
  }
  const currentStatus = getStatus(now, start, end);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [start, end, now]);

  return (
    <div className="auction-card flex flex-col items-center w-full py-4.5">
      <div className="w-[90%] h-50 bg-surface-300"></div>
      <p className="font-bold text-center text-lg my-4">{auction.name}</p>
      <div className="w-[90%] flex justify-between my-4">
        <InfoBar list={categories} val={auction.category} />
        {currentStatus && <InfoBar list={status} val={currentStatus} />}
      </div>
      <div className="w-[90%] flex justify-between items-center">
        <div>
          <span className="font-light text-surface-500">Current Price</span>
          <p>{auction.currentPrice}$</p>
        </div>
        <Timer startsAt={start} endsAt={end} now={now} />
      </div>
    </div>
  );
}

export default AuctionCard;
