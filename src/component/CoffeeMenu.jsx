import Badge from '../assets/icons/badge.svg';
import BadgeWhite from '../assets/icons/badgewhite.svg';
import Line from '../assets/icons/line.svg';
import Coconut from '../assets/images/coconut.png';
import CpffeeMenu1 from '../assets/images/coffeemenu1.png';
import HazelNut from '../assets/images/hazelnut.png';
import SaltedCaramel from '../assets/images/saltedcaramel.png';
export default function CoffeeMenu() {
  return (
    <>
      <div className='mt-[50px]'>
        <div class="flex items-center gap-[10px] justify-center">
          <img src={Line} alt="" />
          <p class="font-lemon-regular text-[#86371C]">Coffee Menu</p>
          <img class="rotate-180" src={Line} alt="" />
        </div>
        <h1 class="text-center text-[40px] font-bakilda mb-[30px]">
          Unlocklive Coffee Menu
        </h1>
        <div class="max-w-[80%] m-auto py-7 pl-[0px] scrn-900:pl-[95px] grid grid-cols-1 justify-center gap-[30px] scrn-900:grid-cols-2">
          <div class="flex flex-col sm:flex-row items-center gap-[10px] p-[25px] border border-[#E7E7E7] rounded-[15px]">
            <img
              class="h-[70px] w-[70px]"
              src={CpffeeMenu1}
              alt=""
            />
            <div class="text-center">
              <h2 class="text-[20px] font-bakilda text-[#270A05]">
                Double Espresso x2
              </h2>
              <p clas=" text-[14px] font-value-medium">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
            <div class="h-[1px] w-[120px] bg-[#E7E7E7]"></div>
            <img
              class="h-[50px] w-[50px]"
              src={Badge}
              alt=""
            />
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-[10px] p-[25px] border border-[#E7E7E7] rounded-[15px]">
            <img
              class="h-[70px] w-[70px]"
              src={HazelNut}
              alt=""
            />
            <div class="text-center">
              <h2 class="text-[20px] font-bakilda text-[#270A05]">
                Hazelnut Heaven Latte
              </h2>
              <p clas=" text-[14px] font-value-medium">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
            <div class="h-[1px] w-[120px] bg-[#E7E7E7]"></div>
            <img
              class="h-[50px] w-[50px]"
              src={BadgeWhite}
              alt=""
            />
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-[10px] p-[25px] border border-[#E7E7E7] rounded-[15px]">
            <img
              class="h-[70px] w-[70px]"
              src={SaltedCaramel}
              alt=""
            />
            <div class="text-center">
              <h2 class="text-[20px] font-bakilda text-[#270A05]">
                Salted Caramel Cold Brew
              </h2>
              <p clas=" text-[14px] font-value-medium">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
            <div class="h-[1px] w-[120px] bg-[#E7E7E7]"></div>
            <img
              class="h-[50px] w-[50px]"
              src={BadgeWhite}
              alt=""
            />
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-[10px] p-[25px] border border-[#E7E7E7] rounded-[15px]">
            <img
              class="h-[70px] w-[70px]"
              src={Coconut}
              alt=""
            />
            <div class="text-center">
              <h2 class="text-[20px] font-bakilda text-[#270A05]">
                Salted Caramel Cold Brew
              </h2>
              <p clas=" text-[14px] font-value-medium">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
            <div class="h-[1px] w-[120px] bg-[#E7E7E7]"></div>
            <img
              class="h-[50px] w-[50px]"
              src={BadgeWhite}
              alt=""
            />
          </div>
        </div>

        <div class="flex justify-center mb-9">
          <button class="hover:bg-[#5f230f] hover:text-white transition-all delay-100 ease-in mt-[25px] sm:mt-[44px] border border-[#86371C] text-[14px] p-[15px] rounded-[10px] text-[#86371C] leading-[0.7]">
            View all Menu
          </button>
        </div>
      </div>
    </>
  );
}
