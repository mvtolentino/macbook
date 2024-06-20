import { google, apple } from '../img';

const FAQs = () => {
  return (
    <div className="justify-center items-start">
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <section className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="font-poppins text-center font-medium xs:text-[70px] text-[45px] text-white leading-[80px]">
                  Plan your<br className="sm:block hidden" />{" "}
                  <span>dream wedding</span><br className="sm:block hidden" />{" "}
                  <span>on your phone.</span>{" "}
                </h1>

                <p className="font-poppins text-center font-normal text-white text-[16px] md:text-[25px] leading-[30.8px] max-w-[470px] mt-5">
                  Available on iPhone and Android. <br className="sm:block hidden" />{" "}
                  <span>Download today for a free trial.</span>{" "}
                </p>

                <div className="flex flex-row justify-between items-center pt-5">
                  <img src={google} className="w-[140px] h-[42px] mr-5" />
                  <img src={apple} className="w-[140px] h-[42px]" />
                </div>
              </section>
            </div>
        </div>
    </div>
  )
}

export default FAQs
