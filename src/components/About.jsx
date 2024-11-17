import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
    return (
        <>
            <Navbar />
            <div style={{ color: '#D1D5DB', backgroundColor: '#1F2937', padding: '2rem' }}>
                <h1
                    style={{
                        fontSize: '2.25rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '2.5rem',
                        color: '#FACC15',
                    }}
                >
                    About Haven Hub
                </h1>

            
                <section style={{ width: '100%', backgroundColor: '#374151', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#FACC15',
                                marginBottom: '1rem',
                            }}
                        >
                            Our History
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <img
                                src="https://media.istockphoto.com/id/1175964604/photo/real-estate-houses-gold-logo-design-in-black-brick-wall-3d-rendering-illustration.jpg?b=1&s=612x612&w=0&k=20&c=jS9rGsfbwcOu6poJp3cIrW_OTo594-qNIkUSHyV2wFc="
                                alt="Founding of SEP REALTORS"
                                style={{
                                    width: '25%',
                                    height: '13rem',
                                    borderRadius: '0.5rem',
                                }}
                            />
                            <p style={{ color: '#9CA3AF', lineHeight: '1.75rem' }}>
                                Haven Hub was founded in 1985 by Sarah E. Peterson, a visionary in
                                the real estate industry. Over the past four decades, we've helped
                                thousands of families find their dream homes and assisted countless
                                investors in making smart property decisions.
                            </p>
                            <span
                                style={{
                                    backgroundColor: '#FACC15',
                                    color: '#1F2937',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                }}
                            >
                                Est. 1985
                            </span>
                            <ul style={{ paddingLeft: '1.5rem', color: '#9CA3AF', lineHeight: '1.75rem' }}>
                                <li>1995: Opening of our first branch office</li>
                                <li>2005: Launch of our commercial real estate division</li>
                                <li>2015: Expansion into property management services</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section style={{ width: '100%', backgroundColor: '#374151', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#FACC15',
                            }}
                        >
                            Our Mission
                        </h2>
                        <img
                            src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Team of SEP REALTORS professionals"
                            style={{
                                width: '50%',
                                height: '10rem',
                                borderRadius: '0.5rem',
                                objectFit: 'cover',
                                marginBottom: '1rem',
                            }}
                        />
                        <p style={{ color: '#9CA3AF', lineHeight: '1.75rem' }}>
                            At Haven Hub, our mission is to guide our clients through the complex
                            world of real estate with expertise, integrity, and personalized service.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: '#9CA3AF', lineHeight: '1.75rem' }}>
                            <li>Providing unparalleled customer service and support</li>
                            <li>Leveraging technology and market insights for a competitive edge</li>
                            <li>Upholding professionalism and ethical standards</li>
                            <li>Contributing positively to the communities we serve</li>
                        </ul>
                    </div>
                </section>

                {/* Our Vision Section */}
                <section style={{ width: '100%', backgroundColor: '#374151', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#FACC15',
                            }}
                        >
                            Our Vision
                        </h2>
                        <p style={{ color: '#9CA3AF', lineHeight: '1.75rem' }}>
                            At Haven Hub, we envision a future where every individual and family has
                            access to their ideal living space.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: '#9CA3AF', lineHeight: '1.75rem' }}>
                            <li>Building sustainable communities</li>
                            <li>Fostering long-term client relationships</li>
                            <li>Setting standards for excellence</li>
                        </ul>
                    </div>
                </section>

                {/* Our Team Section */}
                <section style={{ width: '100%', backgroundColor: '#374151', padding: '2rem 0' }}>
                    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#FACC15',
                                textAlign: 'center',
                            }}
                        >
                            Our Team
                        </h2>
                        <div
                            style={{
                                display: 'grid',
                                gap: '1.5rem',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            }}
                        >
                            {[
                                {
                                    name: 'Peter',
                                    role: 'Founder, CEO',
                                    image:
                                        'https://images.pexels.com/photos/27022874/pexels-photo-27022874/free-photo-of-portrait-of-bald-man-in-elegant-suit-sitting-in-armchair.jpeg?auto=compress&cs=tinysrgb&w=600',
                                },
                                {
                                    name: 'James',
                                    role: 'Head of Operations',
                                    image:
                                        'https://images.pexels.com/photos/5648043/pexels-photo-5648043.jpeg?auto=compress&cs=tinysrgb&w=600',
                                },
                                {
                                    name: 'Rachel',
                                    role: 'Real Estate Expert',
                                    image:
                                        'https://images.pexels.com/photos/1022645/pexels-photo-1022645.jpeg?auto=compress&cs=tinysrgb&w=600',
                                },
                            ].map((member, index) => (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '11rem',
                                            borderRadius: '0.5rem',
                                            objectFit: 'cover',
                                            marginBottom: '0.5rem',
                                        }}
                                    />
                                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#FACC15' }}>
                                        {member.name}
                                    </h3>
                                    <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs;
