import { LuLoaderCircle } from "react-icons/lu";

interface LoaderProps {
  className?: string;
}
function Loader({ className }: LoaderProps) {
  return (
    <LuLoaderCircle
      className={`animate-spin stroke-3 ${className}`}
    ></LuLoaderCircle>
  );
}

export default Loader;
