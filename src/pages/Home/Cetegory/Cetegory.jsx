import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/Section_title/SectionTitle";

const Cetegory = () => {
  return (
    <div>
      <div>
        <SectionTitle
          heading="From 11.00am to 10.00pm"
          subHeading="ORDER ONLINE"
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" mb-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-white shadow-lg italic text-center -mt-16 text-4xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-white shadow-lg italic text-center -mt-16 text-4xl">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-white shadow-lg italic text-center -mt-16 text-4xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-white shadow-lg italic text-center -mt-16 text-4xl">
           Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-white shadow-lg italic text-center -mt-16 text-4xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cetegory;
