import { background, layer1, google, apple } from "../img"

const Hero = () => {
  return (
    <div className="justify-center items-start">
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
                <section id="home" className="flex flex-col md:flex-row justify-center items-center w-full relative">
                    <img src={background} className="opacity-5 absolute" />

                    <div className="flex flex-col justify-center items-start w-full z-[5]">
                    <h1 className="flex-1 font-poppins font-medium ss:text-[55px] text-[40px] text-white ss:leading-[75px] leading-[50px] pt-10 md:py-0">
                        Plan your <br className="sm:block hidden" />{" "}
                        <span>dream wedding</span>{" "}
                        <br className="sm:block hidden" />{" "}
                        <span>on your phone.</span>{" "}
                    </h1>

                    <p className="font-poppins font-normal text-white text-[16px] md:text-[20px] leading-[30.8px] max-w-[470px] mt-5">
                        Available on iPhone and Android. <br className="sm:block hidden" />{" "}
                        <span>Download today for a free trial.</span>{" "}
                    </p>

                    <div className="hidden md:flex flex-row justify-between items-center pt-5">
                            <img src={google} className="w-[140px] h-[42px] mr-5" />
                            <img src={apple} className="w-[140px] h-[42px]" />
                    </div>
                    </div>

                    <div className="flex justify-center items-center py-10 md:py-40">
                        <img src={layer1} className="w-[100%] h-[100%] z-[5]" />
                    </div>

                    <div className="flex flex-row justify-between items-center md:hidden py-5">
                            <img src={google} className="w-[140px] h-[42px] mr-5" />
                            <img src={apple} className="w-[140px] h-[42px]" />
                    </div>
                </section>
            </div>
        </div>
    </div>

  )
}

export default Hero
