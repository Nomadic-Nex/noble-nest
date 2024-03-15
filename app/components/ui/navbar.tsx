import React from "react";
import Noblenest from "../public/noblenest.png";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Navbar() {
  return (
    <main className="flex justify-between items-center w-full px-10">
      <div className="flex justify-start"> 
        <Image src={Noblenest} width={180} height={155} alt="logo" />
      </div>
      <nav className="flex justify-center grow"> 
        <ul className="flex gap-8 text-black text-base font-normal">
          <li><Link href="#" className="text-black">About Us</Link></li>
          <li><Link href="#" className="text-black">Properties</Link></li>
          <li><Link href="#" className="text-black">Agents</Link></li>
          <li><Link href="#" className="text-black">Services</Link></li>
          <li><Link href="#" className="text-black">Financing Plans</Link></li>
        </ul>
      </nav>
      <div className="flex justify-end gap-3"> 
        <Button as={Link} href="/SignIn" variant="ghost" size="md" className="text-white bg-black">Login</Button>
        <Button as={Link} href="/SignUp" variant="ghost" size="md" className="text-black bg-white">SignUp</Button>
      </div>
    </main>
  );
}
