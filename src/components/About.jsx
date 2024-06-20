import { layer3, layer4, layer5, layer6, layer7 } from '../img';

const About = () => {
  return (
    <div className="justify-center items-start">
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <section className="min-h-screen flex flex-col items-start">
                <div className="flex flex-col md:flex-row justify-center items-center py-20">
                  <img src={layer3} className="w-[100%] h-[100%]" />

                  <div className="flex flex-col justify-center items-start px:0 md:px-20">
                    <h1 className="font-poppins font-normal xs:text-[48px] text-[35px] text-white xs:leading-[60.8px] leading-[30px] py-5 md:py-10">
                      Access to <br className="hidden md:block" />
                      <span>Venues </span>
                    </h1>

                    <p className="font-poppins font-normal text-white text-[15px] md:text-[20px] leading-[30.8px]">
                      Find unique and stunning venues that perfectly matches your vision and create an unforgettable backdrop for your celebration.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-center items-center py-20">
                  <div className="flex flex-col justify-center items-start px:0 md:px-20">
                    <h1 className="font-poppins font-normal xs:text-[48px] text-[35px] text-white xs:leading-[60.8px] leading-[30px] py-5 md:py-10">
                      Manage your <br className="hidden md:block" />
                      <span>guests</span>
                    </h1>

                    <p className="font-poppins font-normal text-white text-[15px] md:text-[20px] leading-[30.8px]">
                      Seamlessly organise and keep track of your guest list, send invitations, and manage RSVPs to ensure a smooth and enjoyable experience for everyone attending
                    </p>
                  </div>

                  <img src={layer4} className="w-[450px] h-[100%]" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center py-20">
                  <img src={layer5} className="w-[400px] h-[100%]" />

                  <div className="flex flex-col justify-center items-start px:0 md:px-20">
                    <h1 className="font-poppins font-normal xs:text-[48px] text-[35px] text-white xs:leading-[60.8px] leading-[30px] py-5 md:py-10">
                      Manage your <br className="hidden md:block" />
                      <span>spending</span>
                    </h1>

                    <p className="font-poppins font-normal text-white text-[15px] md:text-[20px] leading-[30.8px]">
                      Stay on top of your wedding expenses, set budgets, and monitor your spending to make the right financial decisions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-center items-center py-20">
                  <div className="flex flex-col justify-center items-start px:0 md:px-20">
                    <h1 className="font-poppins font-normal xs:text-[48px] text-[35px] text-white xs:leading-[60.8px] leading-[30px] py-5 md:py-10">
                      Supplier<br className="hidden md:block" />
                      <span>Directory</span>
                    </h1>

                    <p className="font-poppins font-normal text-white text-[15px] md:text-[20px] leading-[30.8px]">
                      Browse through our comprehensive supplier directory to find the perfect match for every aspect of your wedding, whether it’s the ideal cake designer, a talented photographer, or a skilled florist.
                    </p>
                  </div>

                  <img src={layer6} className="w-[400px] h-[100%]" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center py-20">
                  <img src={layer7} className="w-[400px] h-[100%]" />

                  <div className="flex flex-col justify-center items-start px:0 md:px-20">
                    <h1 className="font-poppins font-normal xs:text-[48px] text-[35px] text-white xs:leading-[60.8px] leading-[30px] py-5 md:py-10">
                      Create & share<br className="hidden md:block" />
                      <span>your Parade</span>
                    </h1>

                    <p className="font-poppins font-normal text-white text-[15px] md:text-[20px] leading-[30.8px]">
                      Build and curate a personalised selection of your shortlisted and finalised suppliers, creating your tailored dream team that meets the vision for your wedding day.
                    </p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </div>
  )
}

export default About
