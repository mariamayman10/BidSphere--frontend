import { FaGhost } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen text-light flex flex-col justify-center items-center">
      <h1 className="flex justify-center gap-4 text-7xl font-bold mb-5 text-primary">
        <span>4</span> <FaGhost className="animate-float"/> <span>4</span>
      </h1>
      <h2 className="mb-2 text-2xl font-medium">Error: 404 Page Not Found</h2>
      <p className="font-medium">Sorry, the page you're looking for cannot be accessed</p>
    </div>
  );
}

export default NotFound;
