import Admin from '../assets/icons/Admin.svg';
import Cart from '../assets/icons/Cart.svg';
import Favourite from '../assets/icons/Favourites.svg';
import Hamburger from '../assets/icons/hamburgericon.svg';
import Search from '../assets/icons/searchicon.svg';
import Logo from '../assets/icons/unlogo.svg';
export default function Header({handleSidebar}) {
  return (
    <>
      <div class="max-w-[80%] m-auto">
        <div class="flex items-center p-6 justify-between gap-5">
          <div class="hidden scrn-900:block">
            <a class="mr-6 font-value-medium" href="">
              Home
            </a>
            <a class="mr-6 font-value-medium" href="">
              Pages
            </a>
            <a class="mr-6 font-value-medium" href="">
              Menu
            </a>
            <a href="">Contact Us</a>
          </div>

          <div class="flex justify-center">
            <img src={Logo} alt="" />
          </div>

          <div class="hidden md:flex items-center gap-5">
            <img src={Search} alt="" />
            <img src={Favourite} alt="" />
            <img src={Cart} alt="" />
          </div>

          <div class="flex items-center gap-3">
            <img
              class="h-[22px] w-[22px]"
              src={Admin}
              alt=""
            />
            <p class="hidden sm:block">Sign in</p>
          </div>
        <div  onClick={handleSidebar}>
        <img
            id="hamicon"
           
            class=" cursor-pointer block scrn-900:hidden h-[20px] w-[20px]"
            src={Hamburger}
            alt=""
          />
        </div>
        </div>
      </div>
      <hr />
    </>
  );
}
