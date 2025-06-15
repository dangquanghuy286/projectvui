import EventItem from "./EventItem";

export default function MainContent({ showMap, toggleMap }) {
  return (
    <div className="px-4 sm:px-8 py-4 sm:py-12 relative">
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 animate-fade-in">
          Lễ Tốt Nghiệp
        </h2>
        <div className="w-12 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-3 sm:mb-6"></div>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed sm:leading-loose mb-6 sm:mb-10 px-4 sm:px-6 text-justify">
          Thân gửi{" "}
          <span className="font-semibold text-purple-600">
            những người bạn của tôi
          </span>
          ,<br />
          Sau những năm tháng học tập vất vả, cuối cùng tôi cũng đã hoàn thành
          chương trình học và sắp bước vào ngày trọng đại nhất –{" "}
          <span className="font-semibold text-purple-600">Lễ Tốt Nghiệp!</span>
          <br />
          Tôi rất mong được chia sẻ niềm vui này cùng với bạn – những người bạn
          thân thiết đã luôn đồng hành và ủng hộ tôi suốt thời gian qua. Thế
          thôi hẹ hẹ hẹ...
        </p>
      </div>
      <div className="space-y-2 sm:space-y-6 mb-4 sm:mb-8">
        <EventItem
          icon="calendar"
          title="Thời gian"
          detail="Thứ Tư, 18/06/2025"
        />
        <EventItem icon="clock" title="Giờ" detail="1:00 PM - 5:00 PM" />
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
