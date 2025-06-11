import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventItem({
  icon,
  title,
  detail,
  onClick,
  showMap,
  setShowMap,
}) {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return (
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
        );
      case "clock":
        return (
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
        );
      case "map":
        return (
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 flex-shrink-0" />
        );
      default:
        return null;
    }
  };

  const getGradient = () => {
    switch (icon) {
      case "calendar":
        return "from-blue-50 to-purple-50";
      case "clock":
        return "from-green-50 to-blue-50";
      case "map":
        return "from-pink-50 to-red-50";
      default:
        return "from-gray-50 to-gray-100";
    }
  };

  return (
    <div
      className={`flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r ${getGradient()} rounded-xl sm:rounded-2xl hover:scale-105 transition-transform ${
        icon === "map" ? "cursor-pointer group" : ""
      }`}
      onClick={icon === "map" ? onClick : undefined}
      onMouseEnter={icon === "map" ? () => setShowMap(true) : undefined}
      onMouseLeave={icon === "map" ? () => setShowMap(false) : undefined}
    >
      {getIcon()}
      <div className="flex-1">
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          {title}
        </p>
        <p
          className="text-sm sm:text-base font-bold"
          style={{ color: getIconColor(icon) }}
        >
          {detail}
        </p>
      </div>
      {icon === "map" && (
        <div
          className={`absolute left-0 top-full mt-2 w-full sm:w-[600px] transition-all duration-300 ease-in-out ${
            showMap
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          } sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:pointer-events-auto z-10`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.821904070898!2d108.22021037589249!3d16.074729039289213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421830870fffff%3A0xe99ebd812024f476!2zMDMgUXVhbmcgVHJ1bmcsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1749617194385!5m2!1svi!2s&key=YOUR_API_KEY"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}

function getIconColor(icon) {
  switch (icon) {
    case "calendar":
      return "#2563eb";
    case "clock":
      return "#16a34a";
    case "map":
      return "#db2777";
    default:
      return "#6b7280";
  }
}
