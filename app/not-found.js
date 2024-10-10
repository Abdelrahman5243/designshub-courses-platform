import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[96] py-8 my-24">
      <h2 className="main-heading">404 - Page Not Found</h2>
      <p className="paragraph my-4">
        Could not find the page you are looking for
      </p>
      <Link
        href="/"
        className="bg-secBg hover:bg-opacity-60 text-white font-semibold max-w-max my-4 p-2.5 px-5
           rounded flex justify-center items-center gap-2 text-sm"
      >
        Back to home
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
