import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
    return (
        <>
            <Navbar />
            <div style={{ color: '#E0E0E0', backgroundColor: '#121212', padding: '2rem 1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.5rem', color: '#FFEB3B' }}>
                    About Haven Hub
                </h1>

                {/* History Section */}
                <section style={{ width: '100%', backgroundColor: '#1E1E1E', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FFEB3B', marginBottom: '1rem' }}>
                            Our History
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <img
                                src="https://media.istockphoto.com/id/1175964604/photo/real-estate-houses-gold-logo-design-in-black-brick-wall-3d-rendering-illustration.jpg?b=1&s=612x612&w=0&k=20&c=jS9rGsfbwcOu6poJp3cIrW_OTo594-qNIkUSHyV2wFc="
                                alt="Founding of SEP REALTORS"
                                style={{ width: '25%', height:'200px', borderRadius: '0.5rem' }}
                            />
                            <p style={{ color: '#B0B0B0', lineHeight: '1.75rem' }}>
                                Haven Hub was founded in 1985 by Sarah E. Peterson, a visionary in the real estate industry. Over the past four decades, we've helped thousands of families find their dream homes and assisted countless investors in making smart property decisions.
                            </p>
                            <span style={{ backgroundColor: '#FFEB3B', color: '#121212', padding: '0.3rem 0.8rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500' }}>
                                Est. 1985
                            </span>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#B0B0B0', lineHeight: '1.75rem' }}>
                                <li>1995: Opening of our first branch office</li>
                                <li>2005: Launch of our commercial real estate division</li>
                                <li>2015: Expansion into property management services</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section style={{ width: '100%', backgroundColor: '#1E1E1E', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FFEB3B' }}>Our Mission</h2>
                        <img
                            src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Team of SEP REALTORS professionals"
                            style={{ width: '50%', height: '10rem', borderRadius: '0.5rem', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <p style={{ color: '#B0B0B0', lineHeight: '1.75rem' }}>
                            At Haven Hub, our mission is to guide our clients through the complex world of real estate with expertise, integrity, and personalized service.
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#B0B0B0', marginTop: '1rem', lineHeight: '1.75rem' }}>
                            <li>Providing unparalleled customer service and support</li>
                            <li>Leveraging technology and market insights for a competitive edge</li>
                            <li>Upholding professionalism and ethical standards</li>
                            <li>Contributing positively to the communities we serve</li>
                        </ul>
                    </div>
                </section>

                {/* Our Vision Section */}
                <section style={{ width: '100%', backgroundColor: '#1E1E1E', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FFEB3B' }}>Our Vision</h2>
                        <p style={{ color: '#B0B0B0', lineHeight: '1.75rem' }}>
                            At Haven Hub, we envision a future where every individual and family has access to their ideal living space.
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#B0B0B0', marginTop: '1rem', lineHeight: '1.75rem' }}>
                            <li>Building sustainable communities</li>
                            <li>Fostering long-term client relationships</li>
                            <li>Setting standards for excellence</li>
                        </ul>
                    </div>
                </section>

                {/* Our Team Section */}
                <section style={{ width: '100%', backgroundColor: '#1E1E1E', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FFEB3B', textAlign: 'center' }}>Our Team</h2>
                        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="https://images.pexels.com/photos/27022874/pexels-photo-27022874/free-photo-of-portrait-of-bald-man-in-elegant-suit-sitting-in-armchair.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Peter"
                                    style={{ width: '100%', height: '11rem', borderRadius: '0.5rem', objectFit: 'cover', marginBottom: '0.5rem' }}
                                />
                                <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#FFEB3B' }}>Peter</h3>
                                <p style={{ color: '#B0B0B0', fontSize: '0.875rem' }}>Founder, CEO</p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="https://images.pexels.com/photos/5648043/pexels-photo-5648043.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="James"
                                    style={{ width: '100%', height: '11rem', borderRadius: '0.5rem', objectFit: 'cover', marginBottom: '0.5rem' }}
                                />
                                <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#FFEB3B' }}>James</h3>
                                <p style={{ color: '#B0B0B0', fontSize: '0.875rem' }}>Head of Operations</p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="https://images.pexels.com/photos/1022645/pexels-photo-1022645.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Rachel"
                                    style={{ width: '100%', height: '11rem', borderRadius: '0.5rem', objectFit: 'cover', marginBottom: '0.5rem' }}
                                />
                                <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#FFEB3B' }}>Rachel</h3>
                                <p style={{ color: '#B0B0B0', fontSize: '0.875rem' }}>Real Estate Expert</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs;
