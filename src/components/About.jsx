import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="text-gray-300 bg-gray-900 p-8">
                <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400">
                    About Haven Hub
                </h1>

                {/* History Section */}
                <section className="w-full bg-gray-800 py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                            Our History
                        </h2>
                        <div className="flex flex-col gap-4">
                            <img
                                src="https://media.istockphoto.com/id/1175964604/photo/real-estate-houses-gold-logo-design-in-black-brick-wall-3d-rendering-illustration.jpg?b=1&s=612x612&w=0&k=20&c=jS9rGsfbwcOu6poJp3cIrW_OTo594-qNIkUSHyV2wFc="
                                alt="Founding of SEP REALTORS"
                                className="w-1/4 h-52 rounded-lg"
                            />
                            <p className="text-gray-400 leading-7">
                                Haven Hub was founded in 1985 by Sarah E. Peterson, a visionary in the real estate industry. Over the past four decades, we've helped thousands of families find their dream homes and assisted countless investors in making smart property decisions.
                            </p>
                            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md text-sm font-medium">
                                Est. 1985
                            </span>
                            <ul className="list-disc pl-6 text-gray-400 leading-7">
                                <li>1995: Opening of our first branch office</li>
                                <li>2005: Launch of our commercial real estate division</li>
                                <li>2015: Expansion into property management services</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="w-full bg-gray-800 py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-yellow-400">Our Mission</h2>
                        <img
                            src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Team of SEP REALTORS professionals"
                            className="w-1/2 h-40 rounded-lg object-cover mb-4"
                        />
                        <p className="text-gray-400 leading-7">
                            At Haven Hub, our mission is to guide our clients through the complex world of real estate with expertise, integrity, and personalized service.
                        </p>
                        <ul className="list-disc pl-6 text-gray-400 mt-4 leading-7">
                            <li>Providing unparalleled customer service and support</li>
                            <li>Leveraging technology and market insights for a competitive edge</li>
                            <li>Upholding professionalism and ethical standards</li>
                            <li>Contributing positively to the communities we serve</li>
                        </ul>
                    </div>
                </section>

                {/* Our Vision Section */}
                <section className="w-full bg-gray-800 py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-yellow-400">Our Vision</h2>
                        <p className="text-gray-400 leading-7">
                            At Haven Hub, we envision a future where every individual and family has access to their ideal living space.
                        </p>
                        <ul className="list-disc pl-6 text-gray-400 mt-4 leading-7">
                            <li>Building sustainable communities</li>
                            <li>Fostering long-term client relationships</li>
                            <li>Setting standards for excellence</li>
                        </ul>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="w-full bg-gray-800 py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold text-yellow-400 text-center">Our Team</h2>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="text-center">
                                <img
                                    src="https://images.pexels.com/photos/27022874/pexels-photo-27022874/free-photo-of-portrait-of-bald-man-in-elegant-suit-sitting-in-armchair.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Peter"
                                    className="w-full h-44 rounded-lg object-cover mb-2"
                                />
                                <h3 className="font-semibold text-lg text-yellow-400">Peter</h3>
                                <p className="text-gray-400 text-sm">Founder, CEO</p>
                            </div>

                            <div className="text-center">
                                <img
                                    src="https://images.pexels.com/photos/5648043/pexels-photo-5648043.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="James"
                                    className="w-full h-44 rounded-lg object-cover mb-2"
                                />
                                <h3 className="font-semibold text-lg text-yellow-400">James</h3>
                                <p className="text-gray-400 text-sm">Head of Operations</p>
                            </div>

                            <div className="text-center">
                                <img
                                    src="https://images.pexels.com/photos/1022645/pexels-photo-1022645.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Rachel"
                                    className="w-full h-44 rounded-lg object-cover mb-2"
                                />
                                <h3 className="font-semibold text-lg text-yellow-400">Rachel</h3>
                                <p className="text-gray-400 text-sm">Real Estate Expert</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs;
