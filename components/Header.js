import { XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    return (
        <header>
            <Image 
                src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                height={40}
                width={120}
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef}
                className="flex-grow w-full focus:outline-none" type="text" />
                <XIcon className="h-7 text-gray-500 cursor-pointer" />
            </form>
        </header>
    )
}

export default Header
