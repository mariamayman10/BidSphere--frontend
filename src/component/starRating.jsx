import { StarIcon } from "@phosphor-icons/react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon
          key={idx}
          size={20}
          weight="fill"
          fill={idx < rating ? "#f4681f" : "#ffffffb3"}
        />
      ))}
    </div>
  );
}

export default StarRating;
