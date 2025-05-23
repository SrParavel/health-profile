import { LuHeartPulse } from "react-icons/lu";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <span className="p-2 bg-gray-100 shadow-sm rounded-full">
        <LuHeartPulse className="size-8 text-green-500"></LuHeartPulse>
      </span>
      <h1 className="text-xl font-semibold text-gray-600">
        Cardio
        <span className="font-bold text-gray-800">Risk</span>
        {/* <span className="h-full text-xs font-boldf">AI</span> */}
      </h1>
    </div>
  );
}

export default Logo;
