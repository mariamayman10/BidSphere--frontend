import AuctionCard from "../../component/auctionCard/auctionCard";
import AuctionSwiper from "./auctionSwiper";
import SectionHeader from "./sectionHeader";

function LiveAuctionsSection() {
  const auction = {
    name: "Antique Wall Clock",
    description:
      "Antique Wall Clock is a high-quality antiques in excellent condition. It features original materials preserved, rare and valuable, and collector’s item. Perfect for collectors, enthusiasts, or anyone looking for a reliable and stylish antiques. Suitable for daily use or display, this item is ready for immediate auction and promises satisfaction for buyers seeking both quality and value.",
    currentPrice: 784,
    startsAt: "2026-04-17T07:15:10.589Z",
    endsAt: "2026-04-25T07:15:10.589Z",
    status: "LIVE",
    category: "Antiques",
    imgUrl: "antique6.jpg",
  };
  const auctions = Array.from({ length: 5 }).map(() => auction);

  return (
    <div className="pt-20 xl:px-20 md:px-15 px-10">
      <SectionHeader title="Top Live Auctions" />
      <AuctionSwiper auctions={auctions} />
    </div>
  );
}

export default LiveAuctionsSection;
