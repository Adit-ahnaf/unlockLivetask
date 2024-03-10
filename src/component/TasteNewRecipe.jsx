import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArwLeft from "../assets/icons/arwleft.svg";
import Line from "../assets/icons/line.svg";
import Burger from "../assets/images/burgir.png";
import Salad from "../assets/images/slad.png";

// Import Swiper styles

import "swiper/css";
export default function TasteNewRecipe() {
  //   const sw = useSwiper();
  //   const NextSlide = () => {
  //     console.log("testing----------");
  //     if (sw && sw.slideNext) {
  //         console.log('sw-----')
  //         sw.slideNext();
  //       }
  //   };
  return (
    <div class="bg-[#FFFAF2]">
      <div class="max-w-[80%] m-auto py-7 gap-[50px] pl-0 scrn-900:pl-[95px] grid grid-cols-1 scrn-1330:grid-cols-[0.5fr_1fr]">
        <div>
          <div class="flex items-cente gap-3">
            <img src={Line} alt="" />
            <h3 class="font-lemon-regular text-[#86371C]">New Recipes</h3>
          </div>
          <h1 class="font-bakilda text-[36px]">Taste Our New Recipe</h1>
          <p class="font-value-medium mt-[20px]">
            Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
            malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
            porttitor scelerisque amet dolor et. Nisi ac vitae tortor
            lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
            nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscings
            eu sit ornare imperdiet viverra sit vel. There are many variations
            of passages of Lorem Ipsum form any injected humour, or randomised
            words which don't look slightly believable.
          </p>

          <div class="flex items-center gap-4 mt-5">
            <img
              class="blogprev hover:scale-[1.04] transition-all delay-75 ease-in"
              src={ArwLeft}
              alt=""
            />
            <div className="blognext">
              <img
                class="rotate-180 blognext hover:scale-[1.04] transition-all delay-75 ease-in"
                src={ArwLeft}
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".blognext",
              prevEl: ".blogprev",
            }}
          >
            <SwiperSlide>
              <img src={Burger} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Salad} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Salad} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Burger} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
