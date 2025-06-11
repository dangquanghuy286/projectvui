import { GraduationCap, Star, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 sm:px-8 py-4 sm:py-12 text-center">
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 animate-spin-slow">
        <GraduationCap className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 animate-spin-slow">
        <Star className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="mb-2 sm:mb-3 animate-bounce">
        <Sparkles className="w-8 h-8 sm:w-16 sm:h-16 text-white mx-auto mb-1 sm:mb-3" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 animate-pulse">
        THƯ MỜI
      </h1>
      <div className="w-16 sm:w-32 h-0.5 sm:h-1 bg-white mx-auto rounded-full"></div>
    </div>
  );
}
