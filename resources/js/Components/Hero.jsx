import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [countersStarted, setCountersStarted] = useState(false);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const componentRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);

        // Intersection Observer for scroll effect
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setCountersStarted(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
                rootMargin: '50px 0px -50px 0px' // Start animation slightly before element enters view
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    // Counter animations
    useEffect(() => {
        if (countersStarted) {
            // Counter 1: 0 to 80
            let count1 = 0;
            const interval1 = setInterval(() => {
                count1 += 2;
                setCounter1(count1);
                if (count1 >= 80) {
                    clearInterval(interval1);
                    setCounter1(80);
                }
            }, 30);

            // Counter 2: 0 to 3
            let count2 = 0;
            const interval2 = setInterval(() => {
                count2 += 0.1;
                setCounter2(Math.round(count2 * 10) / 10);
                if (count2 >= 3) {
                    clearInterval(interval2);
                    setCounter2(3);
                }
            }, 100);

            // Counter 3: 0 to 2
            let count3 = 0;
            const interval3 = setInterval(() => {
                count3 += 1;
                setCounter3(count3);
                if (count3 >= 2) {
                    clearInterval(interval3);
                    setCounter3(2);
                }
            }, 200);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [countersStarted]);
    return (
        <div ref={componentRef} className="relative bg-white overflow-hidden">
            {/* Background Pattern and Gradients */}
            <div className="absolute inset-0">
                {/* Simple Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Top to Bottom Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)'
                    }}
                ></div>

                {/* Edge to Middle Gradient (Radial) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.6) 100%)'
                    }}
                ></div>

                {/* Top to Text Area Middle Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 60%)'
                    }}
                ></div>

                {/* Bottom to White Gradient (underside fade) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 50%)'
                    }}
                ></div>

                {/* Blue gradient fading to white on top and bottom edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(0, 109, 175, 0.1) 15%, rgba(0, 109, 175, 0.05) 50%, rgba(0, 109, 175, 0.1) 85%, rgba(255, 255, 255, 1) 100%)'
                    }}
                ></div>
            </div>

            {/* Main Content Section */}
            <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>
                        {/* Brand Header */}
                        <div className={`flex items-center space-x-3 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-900 delay-600 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`} style={{backgroundColor: '#013387'}}>
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <div>
                                <div className="font-bold text-lg" style={{color: '#013387'}}>STOREMATE</div>
                                <div className="text-gray-600 text-sm font-medium">Order Management System</div>
                            </div>
                        </div>

                        {/* Status Label */}
                        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <span className="inline-block text-sm font-bold tracking-widest animate-pulse" style={{color: '#006daf'}}>
                                POWERING 1,000,000+ ORDERS
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className={`transition-all duration-1100 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                One platform.<br />
                                <span style={{color: '#006daf'}}>Total order control.</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                Streamline your inquiries, orders, and deliveries in one place. Say goodbye to manual uploads, duplicate orders, and missed follow-ups.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1000 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 -translate-x-4'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1100 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-90'}`}>
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{counter1}%</div>
                                        <div className="text-sm text-gray-600">Returns Reduced</div>
                                    </div>
                                </div>
                            </div>

                            <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1200 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 translate-x-4'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1300 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-90'}`}>
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{counter2}hr+</div>
                                        <div className="text-sm text-gray-600">Time Saved</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className={`flex items-center space-x-4 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <a
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                                style={{backgroundColor: '#013387'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}>
                                Start a Free Trial
                                <svg
                                    className="inline-block w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <Link href="/contact-us" className="font-semibold transition-colors duration-300 flex items-center space-x-2 group"
                                style={{color: '#006daf'}}
                                onMouseEnter={(e) => e.target.style.color = '#013387'}
                                onMouseLeave={(e) => e.target.style.color = '#006daf'}>
                                <span>Contact us</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Interface */}
                    <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
                        {/* Dashboard Content */}
                        <div className="relative">
                            {/* Small gradient background only at bottom center */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-blue-500/30 to-transparent"></div>

                            {/* Enhanced dashboard mockup with styling */}
                            <div className="relative z-10 overflow-hidden rounded-lg hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                                {/* Dashboard header */}
                                <div className="h-16 bg-gradient-to-r from-blue-50 to-white flex items-center px-6 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#006daf'}}>
                                            <svg className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Storemate OMS Dashboard</span>
                                    </div>
                                    <div className="ml-auto flex items-center space-x-3">
                                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full animate-pulse">Live</span>
                                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Real-time</span>
                                    </div>
                                </div>

                                {/* Dashboard main content */}
                                <div className="relative overflow-hidden rounded-lg ml-4 mb-4">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 transition-transform duration-1000 ${isVisible ? 'translate-x-full' : '-translate-x-full'}`}></div>
                                    <img
                                        src="/Dashboards-2048x1152.jpg"
                                        alt="Storemate OMS Dashboard"
                                        className="w-full h-auto relative z-10 transition-all duration-300 ease-out"
                                        style={{
                                            filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.05)';
                                            e.target.style.transition = 'transform 300ms ease-out';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                            e.target.style.transition = 'transform 800ms ease-out';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Success rate floating indicator */}
                            <div className={`absolute -bottom-4 -right-4 rounded-full p-3 shadow-lg transition-all duration-800 delay-1500 ${isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-180'}`} style={{backgroundColor: '#013387'}}>
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Statistics Section */}
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    {/* Subtitle with same style as POWERING label */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            TRUSTED BY 500+ BUSINESSES
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        Reduce Duplicate Orders 85%+
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Stat 1 - Returns Reduced */}
                    <div className="relative group">
                        <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#00BCE7'}}>
                            <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                {counter1}%
                            </div>
                            <div className="text-lg font-semibold text-gray-800 mb-2">Returns Reduced</div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Block fake customers early and avoid unnecessary courier costs.
                            </div>
                            <div className="mt-4 text-xs font-medium uppercase tracking-wider" style={{color: '#006daf'}}>
                                STOREMATE OMS
                            </div>
                        </div>
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#00BCE7'}}></div>
                    </div>

                    {/* Stat 2 - Time Saved */}
                    <div className="relative group">
                        <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#006daf'}}>
                            <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                {counter2}hr+
                            </div>
                            <div className="text-lg font-semibold text-gray-800 mb-2">Time Saved</div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Automate courier uploads, follow-ups, and order handling.
                            </div>
                            <div className="mt-4 text-xs font-medium uppercase tracking-wider" style={{color: '#006daf'}}>
                                STOREMATE OMS
                            </div>
                        </div>
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#006daf'}}></div>
                    </div>

                    {/* Stat 3 - Courier Connected */}
                    <div className="relative group">
                        <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#013387'}}>
                            <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                0{counter3}
                            </div>
                            <div className="text-lg font-semibold text-gray-800 mb-2">Courier Connected</div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Integrated with Royal Express, Trans Express & more coming soon.
                            </div>
                            <div className="mt-4 text-xs font-medium uppercase tracking-wider" style={{color: '#006daf'}}>
                                STOREMATE OMS
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
    );
}
