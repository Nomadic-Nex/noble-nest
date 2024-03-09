"use client"

import React from "react";
import Image from "next/image";
import { Button, Input, Link } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../../public/eyeFilled";
import {EyeFilledIcon} from "../../../public/eyeClosed";
import Email from "../../../public/email.png";
import Apple from "../../../public/apple.png";
import Google from "../../../public/google.png";
import Noble from "../../../public/noblenest.png";

const SignUp = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="w-full min-h-screen bg-black bg-authbg bg-[length:900px_1050px] bg-no-repeat bg-center flex flex-col justify-center items-center">
      {/* Centered "Noble Nest" heading at the top */}
      <Image src={Noble} width={307} height={76} alt="logo"/>

      {/* Section containing inputs and buttons, centered below the heading */}
      <section className="flex flex-col gap-5 justify-center align-middle mr-5 mt-10">
        <h1 className="text-black text-left font-semibold text-xl">Sign in</h1>
        <Input type="text" variant="flat" label="Username" placeholder="Enter your Username" />
        <Input
          label="Password"
          variant="flat"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Button radius="md" className="bg-black text-white text-medium text-md p-3">
          Login
        </Button>
        <p className="text-white font-normal text-sm">
          By continuing you agree to Noble Nests's Terms of service and Privacy Policy
        </p>
        <p className="text-white font-normal text-sm text-center">
          _________________________________ or _________________________________
        </p>
        <Button className="bg-white text-black text-medium text-center p-3">Sign in with Google</Button>
        <p className="text-white font-medium text-base text-center">
          Don't have an account? <span><Link href="#" underline="always">Sign Up</Link></span>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
