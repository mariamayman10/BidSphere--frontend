import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Searchbar({ handleSearch }) {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="flex items-center max-w-3/4">
      <input
        type="text"
        placeholder="Search by Auction Title..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button onClick={()=>handleSearch(searchVal)}>
        <BsSearch />
      </button>
    </div>
  );
}

export default Searchbar;
