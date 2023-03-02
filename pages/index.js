import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

        <title>Google clone by Dinesh Tamang</title>
        <meta name="description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
        <meta name="keywords" content="Dinesh Tamang, Computer Science, AWS Solution Architect, Cloud Engineer, Backend Engineer, Portfolio website, Dinesh Rambahadur Tamang" />
        <meta name="author" content="Dinesh Tamang" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Dinesh Tamang | AWS Solution Architect | Mumbai, India" />
        <meta property="og:description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dineshtamang.tech" />
        <meta property="og:image" content="https://drive.google.com/file/d/10-0Y76IHGnTIA2_5aEli-ey3cBpTUse3/view?usp=sharing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dinesh Tamang | AWS Solution Architect | Mumbai, India" />
        <meta name="twitter:description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
	      <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1130796628997156864/HFXo5m91_400x400.jpg" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <a href="https://images.google.com"><p className="link">Gmail</p></a>
          <a href="https://mail.google.com"><p className="link">Images</p></a>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <a href="https://dineshtamang.tech" target="_blank" rel="noopener noreferrer">
            <Avatar url="https://avatars.githubusercontent.com/u/59863035?v=4" 
            />
          </a>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5 ">
        <Image 
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="google-img"
          />

          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
            <MicrophoneIcon className="h-5" />
          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">Im Feeling Lucky</button>
          </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
