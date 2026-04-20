import AuctionCard from "../../component/auctionCard/auctionCard";
import SectionHeader from "./sectionHeader";

function UpcomingAuctionsSection() {
  const auction = {
    name: "Antique Wall Clock",
    description:
      "Antique Wall Clock is a high-quality antiques in excellent condition. It features original materials preserved, rare and valuable, and collector’s item. Perfect for collectors, enthusiasts, or anyone looking for a reliable and stylish antiques. Suitable for daily use or display, this item is ready for immediate auction and promises satisfaction for buyers seeking both quality and value.",
    currentPrice: 784,
    startsAt: "2026-05-01T07:15:10.589Z",
    endsAt: "2026-05-05T07:15:10.589Z",
    status: "LIVE",
    category: "Antiques",
    imgUrl: "antique6.jpg",
  };
  return (
    <div className="py-15 xl:px-20 md:px-15 px-10">
      <SectionHeader title="Upcoming Auctions" />
      <div className="flex gap-5 overflow-x-scroll pb-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div className="min-w-87.5">
            <AuctionCard key={idx} auction={auction} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingAuctionsSection;
