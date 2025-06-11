import { Star } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-center">
      <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
        Trân trọng,
      </p>
      <p className="font-bold text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Đặng Hữu Quang Huy
      </p>
      <div className="flex justify-center mt-2 sm:mt-3 space-x-2 sm:space-x-3">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
}
