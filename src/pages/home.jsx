import AuctionCard from "../component/auctionCard/auctionCard";
import Searchbar from "../component/searchbar";

function Home() {
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
  return (
    <div className="home-page min-h-screen">
      <main>
        <div className="w-full h-screen flex justify-between items-center xl:px-20 md:px-15 px-10">
          <div className="lg:w-[40%] md:w-[50%] w-full">
            <p className="text-primary text-5xl font-bold mb-10">
              Welcome to BidSphere
            </p>
            <p className="md:max-w-3/4 mb-7 text-lg text-surface-500 font-medium">
              Discover live auctions, place real-time bids, and win unique items
              before time runs out.
            </p>
            <Searchbar />
          </div>
          <div className="hidden md:flex w-1/2 lg:w-[60%] justify-center gap-3">
            <div className="flex-1 max-w-87.5">
              <AuctionCard auction={auction} />
            </div>
            <div className="hidden lg:block flex-1 max-w-87.5">
              <AuctionCard auction={auction} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
