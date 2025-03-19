import { Phone, Mail, Map  } from "lucide-react";
const Contact = () => {
  return (
    <section className="gradient-section text-black py-5 relative z-10">
      <div className="container mx-auto px-6 text-start">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-2xl md:text-4xl  item-center text-white relative z-10 font-semibold mb-5 font-poppins">
              Let’s{""}
              <span className="text-primary italic font-inter mx-3">
                Build
              </span>{""}
              Something Amazing!{" "}
            </h1>

            <p className="text-md w-full mb-8 text-white font-poppins">
              Ready to take your business to the next level? Contact us today to
              discuss your project and create a digital experience that sets you
              apart.{" "}
            </p>
<div className="bg-gray-900 bg-opacity-50 flex flex-col items-start justify-start shadow-none pt-5 rounded-[40px] mx-auto ps-10">
             <div className="w-full flex justify-start mt-4 mb-5 text-left">
                <div className="pt-1">
                  <Phone color="#fff"  />
                </div>
                <div className="ms-10">
                  <p className="mb-0 text-white font-poppins">+91 8178614811</p>
                  <p className="text-white font-poppins">+91 8840002768</p>
                </div>
              </div>

              {/* Email */}
              <div className="w-full flex items-start justify-start mb-5 text-left">
                <div className="pt-1">
                  <Mail color="#fff"  />
                </div>
                <div className="ms-10">
                  <p className="mb-0 text-white font-poppins">info@weblibron.com</p>
                  <p className="text-white font-poppins">hello@weblibron.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="w-full flex justify-start mb-3 pb-5 text-left">
                <div className="pt-1">
                  <Map color="#fff" />
                </div>
                <div className="ms-10">
                  <p className="mb-0 text-white font-poppins">Ajnara Gen X, Gaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
