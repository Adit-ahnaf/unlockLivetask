import Arw from "../assets/icons/arwsvg.svg";
import PlayBtn from "../assets/icons/playbtn.svg";
export default function Video() {
  return (
    <>
      <div class="bg-[#FFFAF2] relative">
        <div class="block sm:flex max-w-[80%] m-auto gap-8 py-7 pl-[0px] scrn-900:pl-[95px]">
          <div class="hidden scrn-900:block bg-[#86371C] w-[250px] p-[20px] absolute top-0 rounded-bl-lg rounded-br-lg">
            <img src={Arw} alt="" />
            <div class="flex items-center gap-3 mt-4 pb-[25px]">
              <img
                class="w-[40px] h-[40px]"
                src={PlayBtn}
                alt=""
              />
              <h2 class="text-white font-abril-bold text-center text-[20px]">
                Play Intro Video
              </h2>
            </div>
          </div>
          <div class="w-full sm:w-[400px]">
            <div class="block scrn-900:hidden bg-[#86371C] w-full sm:w-[250px] h-full p-[20px]">
              <img src={Arw} alt="" />
              <div class="flex items-center gap-3 mt-4 pb-[25px]">
                <img class="w-[40px] h-[40px]" src={PlayBtn} alt="play button" />
                <h2 class="text-white font-abril-bold text-center text-[20px]">
                  Play Intro Video
                </h2>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-5 w-full mt-5 sm:mt-0">
            <div class="pr-5 border-0 xl:border-r border-[#E7E7E7]">
              <h2 class="font-abril-bold text-[#270A05] font-bold text-[24px]">
                Our Opening Hours
              </h2>
              <p class="font-value-medium text-[18px]">
                Mon - Sat: 07:00 - 18:00
              </p>
              <p class="font-value-medium text-[18px]">
                Only Sun: 09:00 - 14:00
              </p>
            </div>
            <div class="pl-0 xl:pl-5 pr-5 border-0 xl:border-r border-[#E7E7E7]">
              <h2 class="font-abril-bold text-[#270A05] font-bold text-[24px]">
                Our Live Location
              </h2>
              <p class="font-value-medium text-[18px]">
                848 A 28TH ST, Brooklyn New York, UK
              </p>
            </div>
            <div class="pl-0 xl:pl-5 flex flex-col">
              <h2 class="font-abril-bold text-[#270A05] font-bold text-[24px]">
                Book A Table Now
              </h2>
              <div class="max-w-[190px]">
                <p class="font-value-medium text-[18px] text-left xl:text-right">
                  +1 318-254-6849
                </p>
                <p class="font-value-medium text-[18px] text-left xl:text-right">
                  +1 452-754-6579
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
