import { layer2 } from '../img';

const Features = () => {
  return (
    <div className="justify-center items-start">
        <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
                <section className="min-h-screen flex flex-col justify-center items-center">
                    <h1 className="font-poppins font-medium xs:text-[80px] text-[45px] text-white relative top-0 md:top-40">
                        How does it work?
                    </h1>

                    <img src={layer2} className="relative bottom-0 md:bottom-[-300px]" />
                </section>
            </div>
        </div>
    </div>
  )
}

export default Features
