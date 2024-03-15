import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/noblenest.png";
import { Badge, Avatar, Input } from "@nextui-org/react";
import Navbar from '../../../components/navbar';
import Bed from "../../../public/bedSuite.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Udash = () => {
  return (
    <main className='flex min-h-screen bg-gradient-to-b from-red-200 via-red-100 to-slate-200'>
      <div className='bg-udashbg bg-no-repeat bg-center'>
        <section className='justify-items-center align-middle'>
            <Input type='text' placeholder='Enter your text'/>
        </section>
        <section className='grid grid-cols-3 gap-5'>
          <div className='justify-self-start p-3'>
            <Image
              src={Logo}
              width={180}
              height={155}
              alt='logo'
            />
          </div>
          <div className='flex flex-col justify-self-center p-3'>
            <Navbar />
          </div>
          <div className='justify-self-end p-4'>
            <Badge color="danger" shape="circle" showOutline={false}>
              <Avatar
                isBordered
                radius="md"
                size='sm'
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </Badge>
          </div>
        </section>
        <section className='flex gap-10'>
          <h1 className='text-black text-left text-2xl font-bold'>Projects you might be interested in</h1>
        <div>
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={Bed}
                width={850}
                height={750}
                alt='pg'
              />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          </div>
        </div>
        </section>
      </div>
    </main>
  );
};
export default Udash;
