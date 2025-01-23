// import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSwiper = () => {
  return (
    <div className="md:h-[400px] overflow-hidden">
      <Swiper
        className="w-full"
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <img
            className="object-contain w-full h-full"
            src="https://i.imghippo.com/files/xxA2277mQg.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-contain w-full h-full"
            src="https://i.imghippo.com/files/Ve5978vII.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-contain w-full h-full"
            src="https://i.imghippo.com/files/MNfA1339rV.jpeg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
