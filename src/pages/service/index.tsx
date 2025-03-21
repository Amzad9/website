import React from 'react';
import Image from 'next/image';

function Web() {
    const services = [
        {
            title: "Corporate Intranet Portal",
            subtitle: "Create your Virtual Office",
            description: "Work from anywhere in the world by making your office mobile with our Intranet systems, without compromising discipline, productivity, vigilance & much needed security!",
            gradientFrom: "from-primary",
            gradientTo: "to-blue-500",
            imagePosition: "right",
        },
        {
            title: "Corporate Public Websites",
            subtitle: "Create your Online Presence",
            description: "Become accessible to all your potential market by going online and establishing your company’s corporate website!",
            gradientFrom: "from-blue-500",
            gradientTo: "to-primary",
            imagePosition: "left",
        },
        {
            title: "Document Management",
            subtitle: "Create your Online Presence",
            description: "Become accessible to all your potential market by going online and establishing your company’s corporate website!",
            gradientFrom: "from-primary",
            gradientTo: "to-blue-500",
            imagePosition: "right",
        },
        {
            title: "Digital Learning Platform",
            subtitle: "Create collaborative learning platforms",
            description: "Now you can bring subject matter experts and the students from anywhere in the world into classes in engaging & effective ways!",
            gradientFrom: "from-blue-500",
            gradientTo: "to-primary",
            imagePosition: "left",
        },
    ];

    return (
        <>
            {services.map((item, index) => (
                <section key={index} className="bg-black text-white mt-16 relative">
                    {/* Glowing accent in corner */}
                    <div className={`absolute top-0 ${item.imagePosition === 'right' ? 'right-0' : 'left-0'} w-32 h-32 rounded-full blur-[80px] opacity-30 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} -z-0 group-hover:opacity-50 transition-opacity duration-700`}></div>

                    <div className="container mx-auto px-6 py-5 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 group relative">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {item.imagePosition === 'left' ? (
                                <>
                                    <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                                        <Image src="https://images.pexels.com/photos/167259/pexels-photo-167259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Placeholder" height={400} width={600} objectFit="contain" />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <h2 className="text-3xl font-bold mb-4 text-primary group-hover:text-blue-500 transition-colors duration-300">{item.title}</h2>
                                        <h4 className="text-xl font-semibold mb-4">{item.subtitle}</h4>
                                        <p className="mb-4">{item.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-full md:w-1/2">
                                        <h2 className="text-3xl font-bold mb-4 text-primary group-hover:text-blue-500 transition-colors duration-300">{item.title}</h2>
                                        <h4 className="text-xl font-semibold mb-4">{item.subtitle}</h4>
                                        <p className="mb-4">{item.description}</p>
                                    </div>
                                    <div className="w-full md:w-1/2 text-center">
                                        <Image src="https://images.pexels.com/photos/167259/pexels-photo-167259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Placeholder" height={400} width={600} objectFit="contain" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Web;