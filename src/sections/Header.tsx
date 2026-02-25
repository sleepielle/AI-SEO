import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Image from "next/image";
import SVGHelper from "@/components/SVGHelper";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto ">
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <SVGHelper className="w-8 h-8 text-white">
              <path d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z" />
            </SVGHelper>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm ">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center ">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a]  shadow-[0px,0px,12px,#8c45ff] ">
              <div className="absolute inset-0 ">
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_transparent)]"></div>
                <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,transparent,black_transparent)]"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
                {/**turns the past two borders into the gradient glow */}
              </div>
              <span>Join waistlist</span>{" "}
              {/**separation for items in the button and decorations */}
            </button>
            <Image
              src={MenuIcon}
              alt="MenuIcon"
              width={24}
              height={24}
              className="md:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
