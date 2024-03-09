import Navbar from "../../components/navbar";
import Image from "next/image";
import Hero from "../../public/Hero1.png";
import Mssg from "../../public/messages.png";
import Edit from "../../public/edit-2.png";
import Sms from "../../public/sms-tracking.png"
import Slider from "../../components/propertyCarousel";
import Display from '../../public/display.png';
import News from "../../public/newsltter.png";
import Bed from "../../public/bedSuite.png";
import Living from "../../public/Living.png";
import Dine from "../../public/Dining.png";
import Dots from "../../public/dots.png";
import Phone from "../../public/phone.png";
import Ficon from "../../public/footer.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="w-[1200px] h-[89px] mt-3 p-3 justify-center">
        <Navbar/>
      </div>
      <section className="bg-gradient-to-r from-color-start to-color-end h-[38.563rem] w-[84.375rem] rounded-3xl flex justify-center items-center ml-12">
        <div className="p-8">
          <h4 className="text-black font-light">Welcome to Noble Nest</h4>
          <h1 className="font-extrabold pt-6 text-6xl">Manage your<br></br> property</h1>
          <h4 className="font-light pt-14">Experience unparalleled convenience with nearby amenities<br></br>ensuring everything you need is easily accessible.</h4>
          <div className="inline-flex pt-10">
            <input type="text" className="bg-white w-[27.375 rem] h-[3.75 rem] rounded-xl pl-3 py-2" placeholder="Enter your Email"></input>
            <button className="bg-black text-white font-normal text-sm rounded-2xl w-[27.375 rem] h-[3.75 rem] px-3 py-2 hover:bg-sky-600 drop-shadow-md">Get a quote</button>
          </div>
        </div>
        <Image
          src={Hero}
          width={785}
          height={667}
          alt="hero"
        />
      </section>
      <section className="flex flex-col">
        <h4 className="font-light text-base text-center mt-2">Three steps. Three minutes.</h4>
        <h1 className="font-bold text-6xl text-center mt-5">Everything should be this easy.</h1>
        <div className="flex flex-row justify-between p-12 gap-8">
          <div className="flex flex-col">
            <Image
              src={Mssg}
              width={75}
              height={75}
              alt="mssg"
              style={{ display: "block", margin: "auto", verticalAlign: "middle" }}
            />
            <h2 className="font-bold text-xl text-center pt-2">Answer Questions<br></br><span className="font-normal">Need guidance? Our experts are here to<br></br>provide the information you need to<br></br>make smart decisions.</span></h2>
          </div>
          <div className="flex flex-col">
            <Image
              src={Sms}
              width={75}
              height={75}
              alt="sms"
              style={{ display: "block", margin: "auto", verticalAlign: "middle" }}
            />
            <h2 className="font-bold text-xl text-center pt-2">Select a Quote<br></br><span className="font-normal">Need guidance? Our experts are here to<br></br>provide the information you need to<br></br>make smart decisions.</span></h2>
          </div>
          <div className="flex flex-col">
            <Image
              src={Edit}
              width={75}
              height={75}
              alt="edit"
              style={{ display: "block", margin: "auto", verticalAlign: "middle" }}
            />
            <h2 className="font-bold text-xl text-center pt-2">Get Registered<br></br><span className="font-normal">Need guidance? Our experts are here to<br></br>provide the information you need to<br></br>make smart decisions.</span></h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-left">
        <h4 className="text-black font-normal text-base text-left p-5">Best project of the Years</h4>
        <h1 className="text-black font-bold text-5xl text-left p-5 ">Our recent projects</h1>
        <Slider/>
      </section>
      <section>
        <h1 className="text-black text-7xl font-bold text-center p-6 mt-10">
          We are a Global, botique real estate brokerage
        </h1>
        <div className="flex flex-row justify-center p-4 ml-6">
          <div className="flex flex-col justify-between">
            <h3 className="text-black text-4xl font-semibold p-4 text-start mt-6">
              The transfer of real estate
            </h3>
            <p className="text-black text-base font-normal p-4 mt-2 text-left">
              Whether you're buying or selling, count on us for meticulous
              documentation, legal expertise, and strategic negotiations to ensure a
              smooth transaction. Trust in our experts to navigate the complexities of
              property conveyance and deliver exceptional results. Your journey to
              seamless property transactions begins with Noble Nest.
            </p>
            <div className="flex flex-row gap-7 mt-2">
              <button className="bg-black text-white text-center text-sm rounded-3xl p-4">
                Book now!
              </button>
              <button className="bg-white text-black text-center text-sm rounded-3xl p-4">
                Read more
              </button>
            </div>
          </div>
          <div className="ml-auto mr-10">
            <Image src={Display} width={550} height={550} alt="img" />
          </div>
        </div>
        <div className="flex flex-row gap-20 mt-6 p-5 ml-6">
          <div className="flex flex-col gap-y-2">
            <h4 className="text-black font-bold text-8xl">12+</h4>
            <p className="text-black font-light text-base">Customers</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-black font-bold text-8xl">14+</h4>
            <p className="text-black font-light text-base">Offices</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-black font-bold text-8xl">10+</h4>
            <p className="text-black font-light text-base">Students</p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-color-start to-color-end h-[24.83rem] w-[84.375rem] rounded-3xl flex flex-col justify-between items-start ml-12 mt-6 p-5">
        <div className="flex flex-row gap-10">
          <div className="p-4">
            <h2 className="text-black font-bold text-5xl text-left">Subscribe to our newsletter</h2>
            <p className="text-black font-medium text-base mt-5">
              Stay in the loop with our newsletter to get exclusive updates about our latest offerings, events,<br></br> and valuable resources. Join our community and stay informed in [industry/domain].<br></br> Sign up now to access valuable information and stay ahead.
            </p>
            <div className="flex flex-row gap-3 mt-8">
              <input type="text" placeholder="Enter your Email" className="w-[27.00rem] h-[3.50rem] rounded-3xl p-5"></input>
              <button className="bg-black text-white p-4 rounded-3xl">Get a Quote</button>
            </div>
          </div>
          <div>
            <Image src={News} width={550} height={550} alt="news" className="-mt-14"/>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center">
        <h1 className="text-black text-5xl font-bold mt-8 p-5 text-center">Featured properties</h1>
        <p className="text-black font-medium text-xl text-center mt-3 p-5">Packed with well-furnished homes and apartments</p>
        <div className="flex flex-row justify-evenly p-5 gap-5">
          <div className="flex flex-col justify-center p-3">
            <Image src={Living} width={447} height={532} alt="img"/>
            <p className=" text-gray-200 text-center font-medium text-xl mt-3">Cozy Living Room</p>
          </div>
          <div className="flex flex-col justify-center p-3">
            <Image src={Dine} width={425} height={532} alt="img"/>
            <p className=" text-gray-200 text-center font-medium text-xl mt-3">Fine Dining Room</p>
          </div>
          <div className="flex flex-col justify-center p-3">
            <Image src={Bed} width={425} height={532} alt="img"/>
            <p className=" text-gray-200 text-center font-medium text-xl mt-3">Bedroom Suites</p>
          </div>
        </div>
      </section>
      <section className="flex flex-row p-5">
        <div className="flex flex-col justify-start p-5 mt-10">
          <h2 className="text-black text-4xl font-bold text-left">So, what are you waiting for? <br></br>Get our exclusive deal in one hand</h2>
          <h4 className="text-white text-2xl font-medium text-left mt-8">Download our apps for free and feel the beat!</h4>
          <div className="flex flex-row gap-6 mt-5">
            <button className="bg-black text-white font-medium text-sm p-3 pl-4 rounded-2xl">Get it on<br></br><span className="text-white font-bold text-sm">Google Play</span></button>
            <button className="bg-black text-white font-medium text-sm p-3 pl-4 rounded-2xl">Get it on <br></br><span className="text-white font-bold text-sm">App Store</span></button>
          </div>
        </div>
        <div className="relative">
          <Image src={Dots} width={145.35} height={216.06} alt="contact" className="ml-auto mt-15"/>
          <Image src={Phone} width={580.06} height={200} alt="contact" className="ml-32"/>
          <Image src={Dots} width={145.35} height={216.06} alt="contact"/>
          <div className="absolute top-10 left-28 w-[34.196rem] h-[33.553rem] bg-[#F0CAC5] rounded-t-full -z-10"></div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-color-start to-color-end w-[84.375rem] h-[31.188 rem] rounded-3xl flex flex-row gap-6 p-8 mt-10 justify-around ml-14">
        <div>
          <Image src={Ficon} width={258} height={52.04} alt="icon"/>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-gray-900 text-xl font-semibold">About</h2>
          <Link href="#" className="text-gray-700 text-lg font-medium">Company</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Contact Us</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Terms and Service</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-gray-900 text-xl font-semibold">Product</h2>
          <Link href="#" className="text-gray-700 text-lg font-medium">Categories</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Pricing</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Testimonial</Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-gray-900 text-xl font-semibold">Discover</h2>
          <Link href="#" className="text-gray-700 text-lg font-medium">Teams</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Partners</Link>
          <Link href="#" className="text-gray-700 text-lg font-medium">Careers</Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-gray-900 text-xl font-semibold">Follow us on</h2>
        </div>
      </footer>
      <div>
        <h4 className="text-white text-xl font-semibold text-center mt-2 p-4">© 2024 - Designed by Team StellaX for [IIT Kanpur Techkriti].</h4>
      </div>
    </main>
  );
}
