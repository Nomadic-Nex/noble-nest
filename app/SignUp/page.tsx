"use client"

import React, {useState} from "react";
import Image from "next/image";
import { Checkbox, Input, Link, Button } from "@nextui-org/react";
import Noble from "../../../public/noblenest.png";

const SignUp = () => {
  const [isSelected, setIsSelected] =useState(false);
  return (
    <main className="w-full min-h-screen bg-black bg-authbg bg-[length:900px_1050px] bg-no-repeat bg-center flex flex-col justify-center items-center">
      <Image src={Noble} width={307} height={76} alt="logo"/>
      <section className="flex flex-col gap-5 justify-center align-middle mr-5 mt-10 p-5">
        <h1 className="text-black text-left font-semibold text-xl">Sign in</h1>
        <Input type="text" variant="flat" label="Name" placeholder="Enter your Name"/>
        <Input type="tel" variant="flat" label="Phone Number" placeholder="Enter your Phone number" />
        <Input type="email" variant="flat" label="Email" placeholder="Enter your Email" />
        <Input type="password" variant="flat" label="Password" placeholder="Enter your Password" />
        <Checkbox checked={isSelected} onChange={(e) => setIsSelected(e.target.checked)}>
          <span className="text-white font-light text-base text-center">
            I agree to the <span className="text-white font-semibold text-base text-center">Terms of Service</span>
          </span>
        </Checkbox>
        <Button radius="md" className="bg-black text-white text-medium text-md p-3">
          Register
        </Button>
        <p>Already hava an account? <span><Link href="/" underline="hover">Login</Link></span></p>
      </section>
    </main>
  );
};
export default SignUp;