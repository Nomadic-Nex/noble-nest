import React from "react";
import Noblenest from "../public/noblenest.png";
import Image from "next/image";
import { Button,Link} from "@nextui-org/react";

export default function Navbar() {
  return (
    <main className="flex flex-row justify-center items-center p-5 gap-10">  {/* Centering applied here */}
      <Image src={Noblenest} width={180} height={155} alt="logo" />
      <nav className="flex flex-row gap-10">
        <ul className="flex flex-row gap-6 text-black text-base font-normal text-center">
          <li><Link href="#" className="text-black">About Us</Link></li>
          <li><Link href="#" className="text-black">Properties</Link></li>
          <li><Link href="#" className="text-black">Agents</Link></li>
          <li><Link href="#" className="text-black">Services</Link></li>
          <li><Link href="#" className="text-black">Financing Plans</Link></li>
        </ul>
        <Button as={Link} href="/SignIn" variant="ghost" size="md" className="bg-black text-white text-base text-center p-3">Login</Button>
        <Button as={Link} href="/SignUp" variant="ghost" size="md" className="bg-white text-black text-base text-center p-3">SignUp</Button>
      </nav>
    </main>
  );
}
