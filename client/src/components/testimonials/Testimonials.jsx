import React,{useState,useEffect} from "react";
import "./test.css";
import { BASE_URL } from "../../hook";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
fetch(`${BASE_URL}/api/v1/testimonial`).then(res=>res.json().then(test=>{
  setData(test.data)
  setLoading(false)
}))
  },[])
  const loadingCpn = ()=>{
    return (
      <div>Loading...</div>
    )
  }
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        className="testimonial__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {data.map(({ id, image, testName, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{testName}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
