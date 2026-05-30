import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#f1e4dc]">
      <div className="flex justify-center px-4 py-10 sm:px-8 md:px-16 md:py-12 lg:px-24 xl:px-40">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-between gap-8 md:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-3 text-gray-900 no-underline transition-transform duration-200 ease-in-out"
          >
            <div className="h-7 w-7 text-black transition-transform duration-200 ease-in-out group-hover:scale-110">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="font-playfair m-0 text-lg font-bold">Sahil Gupta</h2>
          </Link>

          <div className="text-center text-sm text-gray-600 md:text-right">
            <p className="font-medium">
              &copy; {new Date().getFullYear()} Sahil Gupta. All Rights
              Reserved.
            </p>
            <div className="mt-3 flex justify-center gap-6 md:justify-end">
              <Link
                href="mailto:sahilgupta70500@gmail.com"
                className="font-medium text-gray-600 no-underline transition-colors duration-200 ease-in-out hover:text-[#c76b51]"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
