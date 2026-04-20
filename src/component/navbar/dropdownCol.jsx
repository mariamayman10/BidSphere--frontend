import { Link } from "react-router-dom";

function DropdownCol({ arr, param, paramValue }) {
  return (
    <>
      <p className="text-surface-400">{param}</p>
      <div className="w-full h-[0.2px] bg-surface-400 my-2"></div>
      <div className="flex flex-col gap-1.5">
        {arr.map((item) => {
          const value = item.toLowerCase();
          const isActive = paramValue === value;
          return (
            <Link
              key={item}
              to={`auctions?${param.toLowerCase()}=${item.toLowerCase()}`}
              className={`group/item block ${isActive ? "active" : ""} hover:bg-surface-200 px-2 py-1 rounded-sm`}
            >
              <div className="relative flex items-center">
                <div className="absolute left-0 right-5 h-[1.5px] w-4 bg-primary origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 ease-out"></div>
                <span className="transition-transform duration-200 group-hover/item:translate-x-5">
                  {item}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default DropdownCol;
