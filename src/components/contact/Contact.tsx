import { PlusCircle } from "lucide-react";
const Contact = () => {
  return (
    <section className="gradient-section text-black py-5 relative z-10">
      <div className="container mx-auto px-6 text-start">
        <div className="relative">
          <h1 className="text-7xl flex item-center text-white relative z-10 font-semibold mb-12 font-poppins">
            Let’s {" "}
            <span className="text-primary italic font-inter mx-3">Build </span>{" "}
            Something Amazing!{" "}
            <button className="ms-5 bg-transparant border-2 text-white hover:border-green-600 text-black font-semibold w-12 h-12 flex justify-center items-center rounded-full">
              <PlusCircle />
            </button>
          </h1>
          <span className="absolute h-5 w-[60%] rounded-xl bg-slate-50 opacity-50 blur-lg top-10 backdrop-blur-sm  left-0 transform -translate-y-1/2"></span>
        </div>
        <p className="text-xl w-full md:w-2/3 mb-8 text-white font-inter">
          Ready to take your business to the next level? Contact us today to discuss your project and create a digital experience that sets you apart.{" "}
        </p>
      </div>
    </section>
  );
};

export default Contact;
