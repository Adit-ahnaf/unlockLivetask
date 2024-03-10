import Line from '../assets/icons/line.svg';
import CofeeMachine from '../assets/images/cofeemachine.png';
export default function WhyChooseUs() {
  return (
    <div class="relative mt-8">
      <img
        class="before:right-0 before:top-0 before:-z-[1] before:absolute before:content-[''] before:bg-BiscutWhite before:h-[340px] sm:before:h-[200px] before:w-[340px] sm:before:w-[200px] before:bg-cover before:bg-no-repeat"
        src=""
        alt=""
      />

      <div class="grid grid-cols-1 scrn-900:grid-cols-2 pt-[2%] scrn-900:pt-[11%] max-w-[80%] m-auto border-[#E7E7E7] gap-[35px] sm:gap-[45px] scrn-900:gap-[100px] py-7 pl-[0px] scrn-900:pl-[95px]">
        <div>
          <div class="flex items-cente gap-3">
            <img src={Line} alt="" />
            <h3 class="font-lemon-regular text-[#86371C]">Why Choose Us</h3>
          </div>
          <h1 class="font-bakilda text-[36px] text-[#270A05]">
            Choosing Unlocklive, A Taste of Perfection
          </h1>
          <p class="font-value-medium text-[#270A05]">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 scrn-1500:grid-cols-3 items-center gap-5 mt-[30px]">
            <div class="flex flex-col border border-[#E7E7E7] p-5 rounded-[8px]">
              <h2 class="text-center font-bakilda font-bold text-[40px]">
                20+
              </h2>
              <p class="font-bakilda text-center">Years Experience</p>
            </div>

            <div class="flex flex-col border border-[#E7E7E7] p-5 rounded-[8px]">
              <h2 class="text-center font-bakilda font-bold text-[40px]">
                100+
              </h2>
              <p class="font-bakilda text-center">Master Chefs</p>
            </div>

            <div class="flex flex-col border border-[#E7E7E7] p-5 rounded-[8px]">
              <h2 class="text-center font-bakilda font-bold text-[40px]">
                30+
              </h2>
              <p class="font-bakilda text-center">Achievements</p>
            </div>
          </div>
          <p class="font-value-medium mt-5">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <button class="hover:bg-[#5f230f] hover:text-white transition-all delay-100 ease-in mt-[25px] sm:mt-[44px] border border-[#86371C] text-[14px] p-[15px] rounded-[10px] text-[#86371C] leading-[0.7]">
            EXPLORE OUR MENU
          </button>
        </div>
        <div>
          <img class="w-full" src={CofeeMachine} alt="" />
        </div>
      </div>
    </div>
  );
}
