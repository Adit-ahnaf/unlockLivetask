import Coffee from '../assets/images/coffe1.png';
import Coffee2 from '../assets/images/coffe2.png';
import Coffee3 from '../assets/images/coffe3.png';
import Cup from '../assets/images/cup.png';
export default function HomeHero(){
    return (
        <div class="relative">
        <div
          class={`before:-z-[1] before:absolute before:content-[''] before:bg-[url('./assets/icons/Leaf.svg')] before:h-[340px] sm:before:h-[500px] before:w-[340px] sm:before:w-[435px] before:bg-cover before:bg-no-repeat`}
        ></div>
        <div
          class="hidden sm:block before:-z-[1] before:bottom-[-126px] before:right-0 before:absolute h-full w-full before:content-[''] before:bg-LeafBottom before:h-[500px] before:w-[435px] before:bg-contain before:bg-no-repeat"
        ></div>
        <div
          class="hidden md:block before:-z-[1] before:bottom-[-170px] before:left-[330px] before:absolute h-full w-full before:content-[''] before:bg-CofeeBin before:h-[300px] before:w-[240px] before:bg-contain before:bg-no-repeat"
        ></div>

        {/* <!-- Hero Section --> */}
        <div
          class="max-w-[80%] m-auto border-0 scrn-900:border-l border-[#E7E7E7] py-7 pl-0 scrn-900:pl-[95px]"
        >
          <div class="grid grid-cols1 md:grid-cols-2 items-center">
            <div>
              <p class="font-lemon-regular">WELCOME TO OUR</p>
              <h1
                class="leading-[1.1] font-bakilda text-[48px] sm:text-[64px] scrn-900:text-[90px]"
              >
                Unlocklive
              </h1>
              <p class="font-value-medium text-[#270A05]">
                Epicurean embodies our commitment to transforming the simple act
                of sipping coffee into a refined and memorable journey. At
                Epicurean, we take pride in curating an exceptional coffee
                experience that transcends the ordinary.
              </p>
              <div class="mt-[45px] block xl:flex items-center gap-3">
                <button
                  class="bg-[#86371C] hover:bg-[#5f230f] transition-all delay-100 ease-in text-[14px] p-[15px] rounded-[10px] text-white leading-[0.7]"
                >
                  EXPLORE OUR MENU
                </button>
                <div class="flex ml-0 xl:mt-0 mt-5 xl:ml-6 items-center gap-5">
                  <div class="flex">
                    <img
                      class="h-[45px] w-[45px] object-cover"
                      src={Coffee}
                      alt=""
                    />
                    <img
                      class="h-[45px] w-[45px] object-cover -ml-[10px]"
                      src={Coffee2}
                      alt=""
                    />
                    <img
                      class="h-[45px] w-[45px] object-cover -ml-[10px]"
                      src={Coffee3}
                      alt=""
                    />
                  </div>

                  <div class="">
                    <h1 class="font-abril-bold text-[#270A05] font-bold">
                      1200+
                    </h1>
                    <p class="font-value-medium">Tasty Variant Coffee</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 mt-[50px]">
                <span class="h-3 w-3 rounded-full bg-[#E9E7E6]"></span>
                <span class="h-3 w-3 rounded-full bg-[#E9E7E6]"></span>
                <span class="h-3 w-3 rounded-full bg-[#E9E7E6]"></span>
                <span class="h-3 w-3 rounded-full bg-[#E9E7E6]"></span>
                <span class="h-3 w-3 rounded-full bg-[#E9E7E6]"></span>
              </div>
            </div>
            <div>
              <img src={Cup} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}