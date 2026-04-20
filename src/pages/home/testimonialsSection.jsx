import StarRating from "../../component/starRating";
import SectionHeader from "./sectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const feedbacks = [
  {
    userName: "James Carter",
    content: "Great platform, smooth bidding experience and very easy to use.",
    rating: 5,
    id: 2,
  },
  {
    userName: "Emily Johnson",
    content: "I like the design and real-time updates, but it can be faster.",
    rating: 4,
    id: 1,
  },
  {
    userName: "Michael Smith",
    content: "Good idea and useful app, looking forward to more categories.",
    rating: 4,
    id: 3,
  },
];

function TestimonialsSection() {
  return (
    <div className="pt-20 xl:px-20 md:px-15 px-10">
      <SectionHeader title="Received Feedbacks" />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          700: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {feedbacks.map((fdbk, idx) => (
          <SwiperSlide key={idx} className="h-auto flex">
            <div className="flex flex-col items-center relative cursor-pointer h-full">
              <div className="min-h-11.25"></div>
              <div className="absolute top-0">
                <img
                  src={`https://www.loremfaces.net/96/id/${fdbk.id}.jpg`}
                  alt="User avatar"
                  width={90}
                  height={90}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="h-full bg-surface-200 hover:bg-surface-100 transition-colors duration-300 text-center pt-15 p-5 rounded-sm rounded-tr-[60px]">
                <p className="text-lg font-medium mb-3">{fdbk.userName}</p>
                <StarRating rating={fdbk.rating} />
                <p className="text-md font-normal mt-2 flex-1">{fdbk.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSection;
