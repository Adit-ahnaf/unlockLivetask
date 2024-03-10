import Cat from '../assets/images/cat.png';
import CoffeeTree from '../assets/images/coffeetree.png';
import Donut from '../assets/images/donut.png';
import Milkshake from '../assets/images/milkshake.png';
import Pie from '../assets/images/pie.png';
export default function ShowCase() {
  return (
    <div class="max-w-[80%] m-auto py-7 pl-0 scrn-900:pl-[95px] pt-[70px]">
      <div class="flex flex-col items-center gap-[10px]">
        <h3 class="font-lemon-regular font-[100] text-[#86371C]">SHOWCASE</h3>
        <img src="./assets/icons/line.svg" alt="" />
        <h1 class="text-center text-[40px] font-bakilda">
          Our Chefs New Creations
        </h1>
        <p class="max-w-[590px] text-center">
          Behold the extraordinary creations born from the synergy of our users'
          ingenuity and the transformative power of AI, a testament to boundless
          innovation.
        </p>
      </div>
      <div class="flex items-center justify-center gap-[50px] mt-[35px] mb-7 overflow-auto">
        <p class="font-value-medium border border-[#86371C] py-[5px] px-[13px] rounded-[20px] bg-[#86371C08]">
          All
        </p>
        <p class="font-value-medium">Burger</p>
        <p class="font-value-medium">Drinks</p>
        <p class="font-value-medium">Pizza</p>
        <p class="font-value-medium">Dinner</p>
        <p class="font-value-medium">Lunch</p>
        <p class="font-value-medium">Cookies</p>
        <p class="font-value-medium">Bakery</p>
      </div>

      <div class="grid grid-cols-4 gap-5">
        <img
          class="w-full h-full object-cover rounded-[20px]"
          src={Cat}
          alt=""
        />
        <img
          class="col-span-3 w-full h-full object-cover rounded-[20px]"
          src={CoffeeTree}
          alt=""
        />
        <img
          class="h-full w-full object-cover rounded-[20px]"
          src={Milkshake}
          alt=""
        />
        <img
          class="object-cover w-full rounded-[20px] col-span-2"
          src={Pie}
          alt=""
        />
        <img
          class="w-full h-full rounded-[20px]"
          src={Donut}
          alt=""
        />
      </div>
    </div>
  );
}
