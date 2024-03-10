import FaceBook from '../assets/icons/febu.svg';
import FooterLogo from '../assets/icons/footerlogo.svg';
import LinkdIn from '../assets/icons/linkdin.svg';
import Twitter from '../assets/icons/twit.svg';
export default function Footer() {
  return (
    <div class="bg-FooterBg bg-cover bg-no-repeat mt-6">
      <div class="max-w-[80%] m-auto py-6 pl-0 scrn-900:pl-[95px] flex flex-col gap-5 sm:flex-row items-center justify-between">
        <img src={FooterLogo} alt="" />
        <div class="text-[14px] sm:text-[16px] flex items-center gap-3">
          <p class="text-white">Terms</p>
          <p class="text-white">Privacy Policy</p>
          <p class="text-white">Cookies</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-[30px] h-[30px] p-[8px] rounded-full border border-white">
            <img class="" src={LinkdIn} alt="" />
          </div>
          <div class="flex items-center justify-center w-[30px] h-[30px] p-[8px] rounded-full border border-white">
            <img src={FaceBook} alt="" />
          </div>

          <div class="flex items-center justify-center w-[30px] h-[30px] p-[8px] rounded-full border border-white">
            <img src={Twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
