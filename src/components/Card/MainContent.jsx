import EventItem from "./EventItem";

export default function MainContent({ showMap, toggleMap }) {
  return (
    <div className="px-4 sm:px-8 py-4 sm:py-12 relative">
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 animate-fade-in">
          Lễ Tốt Nghiệp
        </h2>
        <div className="w-12 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-3 sm:mb-6"></div>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-8 px-2">
          Thân gửi{" "}
          <span className="font-bold text-purple-600">bạn thân của tôi</span>
          ,<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Sau những năm tháng học tập vất vả, cuối cùng tôi cũng đã hoàn thành
          chương trình học và sắp bước vào ngày trọng đại nhất - Lễ Tốt Nghiệp!
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Tôi rất mong được chia sẻ niềm vui này cùng với bạn -những người bạn
          thân thiết đã luôn đồng hành và ủng hộ tôi suốt thời gian qua .Thế
          thôi hẹ hẹ hẹ...
        </p>
      </div>
      <div className="space-y-2 sm:space-y-6 mb-4 sm:mb-8">
        <EventItem
          icon="calendar"
          title="Thời gian"
          detail="Thứ Tư, 18/06/2025"
        />
        <EventItem icon="clock" title="Giờ" detail="1:00 PM" />
        <EventItem
          icon="map"
          title="Địa điểm"
          detail="Hội Trường tầng 4 DTU - 03 Quang Trung"
          onClick={toggleMap}
          showMap={showMap}
        />
      </div>
    </div>
  );
}
