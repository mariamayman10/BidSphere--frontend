import { Link } from "react-router-dom";

function DropdownCol({ arr, param, paramValue }) {
  return (
    <>
      <p className="text-surface-400">{param}</p>
      <div className="w-full h-[0.2px] bg-surface-500 my-2"></div>
      <div className="flex flex-col gap-1.5">
        {arr.map((item) => {
          const value = item.toLowerCase();
          const isActive = paramValue === value;
          console.log(isActive)
          return (
            <Link
              key={item}
              to={`auctions?${param.toLowerCase()}=${item.toLowerCase()}`}
              className={`block ${isActive ? "active" : ""}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default DropdownCol;
