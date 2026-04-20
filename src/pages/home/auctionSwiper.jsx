import AuctionCard from "../../component/auctionCard/auctionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function AuctionSwiper({auctions}) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        400: { slidesPerView: 1 },
        650: { slidesPerView: 2 },
        1028: { slidesPerView: 3 },
        1360: { slidesPerView: 4 },
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
    >
      {auctions.map((actn, idx) => (
        <SwiperSlide key={idx}>
          <AuctionCard auction={actn} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AuctionSwiper;
