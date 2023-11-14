import SectionTitle from "./../../../components/Section_title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
  const [reviews, setRewiews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((data) => setRewiews(data.data));
  }, []);
  return (
    <div>
      <div>
        <SectionTitle
          heading="What our client says"
          subHeading="TESTIMONIALS"
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="p-5 mx-24 my-8 flex flex-col items-center space-y-4">
                <FaQuoteLeft className="text-6xl font-bold" />
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review?.rating}
                ></Rating>
                <p>{review?.details}</p>
                <h3 className="text-2xl text-orange-400">{review?.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
