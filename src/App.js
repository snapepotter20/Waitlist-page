import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col gap-16">
      <div className="m-3 p-3 flex justify-between md:px-10 md:py-7 lg:px-16 lg:py-12">
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Logo.svg"
            alt="logo"
          />
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white px-2 py-2.5 rounded-2xl">
            Hoster is hiring
          </button>
        </div>
        <div className="flex justify-between">
          <ul className="hidden lg:flex lg:items-center lg:justify-center lg:gap-4 font-lato text-gray-400">
            <li><a href="/">Plans</a></li>
            <li><a href="/">Find Domain</a></li>
            <li><a href="/">Why Hosterr</a></li>
          </ul>
        </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-4 font-lato">
            <a href="/" className="text-gray-400 font-lato">Sign In</a>
            <button className="bg-blue-500 rounded-md px-4 py-3 font-medium font-lato text-white">Join waitlist</button>
          </div>
        <div className="lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className=" m-6 md:m-8 lg:flex lg:m-10">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
          <img src='https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Blue%20Shape.svg' alt='' className="h-64 -rotate-45 md:h-72 lg:h-96"/>
          <img src='https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Purple%20Shape.svg' alt='' className="absolute h-64 -rotate-[30deg] md:h-72 lg:h-96"/>
          <img src='https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Pink%20Shape.svg' alt='' className="absolute h-64 -rotate-[15deg] md:h-72 lg:h-96"/>
          <img src='https://github.com/EtishaGarg/waitlist-page-starter-code/blob/main/public/Assets/Hero%20Image%20(Model).png?raw=true' alt='' className="absolute h-64 md:h-72 lg:h-96"/>
        </div>
        <div className="lg:flex-1">

        <div className="space-y-4 mt-16 lg:flex-1 lg:order-1">
          <h1 className="text-5xl font-bold leading-tight font-playfair">Host your website in less than 5 minutes.</h1>
          <p className="font-lato text-gray-400">
          Gearing up to launch a new product or service? A "coming soon" landing page builds excitement and captures leads for when you’re ready to launch. This guide shares six coming soon landing page examples, plus templates & tips on building your own.
          </p>
          <form action="" className="flex flex-col gap-4 md:flex-row">
            <input type="email" placeholder="Enter your email" className="rounded-md px-4 py-3"></input>
            <button className="bg-blue-500 rounded-md px-4 py-3 font-medium font-lato text-white">Join waitlist</button>
          </form>
        </div>
        <div className="flex items-center justify-start gap-2 mt-6">
          <img src="https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Checkmark.svg" alt='checkmark' className="w-10 h-10"/>
          <p className="font-lato text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
        </div>
      </div>

      <footer className=" m-8 flex-col items-center justify-start md:flex-row md:justify-around flex lg:flex-row lg:justify-between">
        <ul className="flex gap-6 font-lato text-gray-400">
          <li> <a href='/'>Facebook</a></li>
          <li> <a href='/'>Instagram</a></li>
          <li> <a href='/'>Twitter</a></li>
        
        </ul>
        <div className="flex gap-6 mt-6">
          <img src="https://raw.githubusercontent.com/EtishaGarg/waitlist-page-starter-code/2612ea5136d6adb9effebff9bd29996dfcf9fc3c/public/Assets/Help%20Avatar.svg" alt=""/>
          <div>
           <p className="font-playfair">Have any questions ?</p>
           <a href="/" className="font-lato">Talk to a specialist!</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

