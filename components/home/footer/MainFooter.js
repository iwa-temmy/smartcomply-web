import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="flex flex-col lg:justify-between lg:flex-row items-center border-t border-black my-7 pt-5 lg:px-20">
      <span>&copy; Copyright SmartComply 2022</span>
      <div className="flex mt-4 lg:mt-0">
        <div className="mx-3">
          <Image
            src="/twitter_icon.svg"
            alt="twitter icon"
            width={30}
            height={30}
          />
        </div>
        <div className="mx-3">
          <Image
            src="/facebook_icon.svg"
            alt="facebook icon"
            width={30}
            height={30}
          />
        </div>
        <div className="mx-3">
          <Image
            src="/instagram_icon.svg"
            alt="instagram icon"
            width={30}
            height={30}
          />
        </div>
        <div className="mx-3">
          <Image
            src="/linkedin_icon.svg"
            alt="linkedin icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
}
