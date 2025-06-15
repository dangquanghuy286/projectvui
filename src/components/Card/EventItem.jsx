import { Calendar, Clock, MapPin, X, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function EventItem({
  icon,
  title,
  detail,
  onClick,
  showMap,
  setShowMap,
}) {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

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

  const getIconColor = (icon) => {
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
  };

  const handleMapClick = () => {
    if (window.innerWidth < 768) {
      // Mobile: Mở modal
      setIsMapModalOpen(true);
    } else {
      // Desktop: Toggle hover map
      onClick?.();
    }
  };

  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/place/03+Quang+Trung,+H%E1%BA%A3i+Ch%C3%A2u+1,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0747291,108.2202104,17z";
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        className={`relative flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r ${getGradient()} rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 ${
          icon === "map" ? "cursor-pointer group" : ""
        } ${icon === "map" ? "hover:shadow-lg" : ""}`}
        onClick={icon === "map" ? handleMapClick : undefined}
        onMouseEnter={
          icon === "map" && window.innerWidth >= 768
            ? () => setShowMap?.(true)
            : undefined
        }
        onMouseLeave={
          icon === "map" && window.innerWidth >= 768
            ? () => setShowMap?.(false)
            : undefined
        }
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
          {icon === "map" && (
            <p className="text-xs text-gray-500 mt-1">
              <span className="sm:hidden">Nhấn để xem bản đồ</span>
              <span className="hidden sm:inline">Hover để xem bản đồ</span>
            </p>
          )}
        </div>

        {icon === "map" && (
          <div className="flex flex-col space-y-1">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-200 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        )}

        {/* Desktop Hover Map */}
        {icon === "map" && (
          <div
            className={`hidden sm:block absolute left-0 top-full mt-4 w-full max-w-[600px] transition-all duration-300 ease-in-out z-20 ${
              showMap
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-gray-800">Vị trí sự kiện</h4>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openGoogleMaps();
                  }}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Mở Google Maps</span>
                </button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.821904070898!2d108.22021037589249!3d16.074729039289213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421830870fffff%3A0xe99ebd812024f476!2zMDMgUXVhbmcgVHJ1bmcsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1749617194385!5m2!1svi!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-xl"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 sm:hidden">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-bold text-lg text-gray-800">
                Vị trí sự kiện
              </h3>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Địa chỉ:</p>
                <p className="font-semibold text-gray-800">{detail}</p>
              </div>

              {/* Map Container */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.821904070898!2d108.22021037589249!3d16.074729039289213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421830870fffff%3A0xe99ebd812024f476!2zMDMgUXVhbmcgVHJ1bmcsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1749617194385!5m2!1svi!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={openGoogleMaps}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Mở Google Maps</span>
                </button>
                <button
                  onClick={() => setIsMapModalOpen(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
