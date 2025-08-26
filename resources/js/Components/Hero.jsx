import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [countersStarted, setCountersStarted] = useState(false);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        // Loading animation trigger
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        // Scroll reveal animation trigger
        const observerTimer = setTimeout(() => {
            setIsVisible(true);
        }, 600);

        // Counter animation trigger
        const counterTimer = setTimeout(() => {
            setCountersStarted(true);
        }, 1500);

        return () => {
            clearTimeout(timer);
            clearTimeout(observerTimer);
            clearTimeout(counterTimer);
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
        <div className="relative bg-white overflow-hidden">
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

            {/* Text Section with Loading Animation */}
            <div className={`relative mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-center">
                    {/* Label with slide-in animation */}
                    <div className={`mb-4 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="inline-block text-sm font-bold tracking-widest animate-pulse" style={{color: '#006daf'}}>
                            POWERING 1,000,000+ ORDERS
                        </span>
                    </div>

                    {/* Headline with staggered animation */}
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 transition-all duration-900 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        One platform.<br />
                        Total order control.
                    </h1>

                    {/* Description with fade-in animation */}
                    <p className={`text-base font-medium text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Streamline your inquiries, orders, and deliveries in one place. Say goodbye to manual uploads, duplicate orders, and missed follow-ups. With Storemate OMS, you can automate everything from syncing couriers to tracking real-time progress — all with just one click.
                    </p>

                    {/* Three-column structure with staggered animation */}
                    <div className={`flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 transition-all duration-1200 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                        {/* Column 1: CTA Buttons with hover animations */}
                        <div className="flex flex-col items-center gap-3">
                            <Link
                                href="https://welcome.oms.storemate.cloud/register"
                                className="rounded-md px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:shadow-lg hover:scale-105 text-center transition-all duration-300 transform hover:-translate-y-1"
                                style={{backgroundColor: '#006daf'}}
                            >
                                Start a Free Trial
                            </Link>
                            <div className="text-sm font-semibold">
                                or <Link href="/contact-us" className="ml-1 font-bold hover:opacity-80 hover:scale-110 transition-all duration-200" style={{color: '#006daf'}}>Contact us</Link>
                            </div>
                        </div>

                        {/* Column 2: Company Logos with hover effects */}
                        <div className="flex items-center gap-4">
                            {/* Storemate Logo */}
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border border-gray-200 hover:shadow-md hover:scale-110 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                                <img
                                    src="/Store-Mate-Logo-3.png"
                                    alt="Store Mate Logo"
                                    className="h-8 w-8 object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Company Logo */}
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white border border-gray-200 hover:shadow-md hover:scale-110 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                                <img
                                    src="/cropped-cropped-logo_new_fav.jpeg"
                                    alt="Company Logo"
                                    className="h-8 w-8 object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Column 3: Star Rating with hover animations */}
                        <div className="flex items-start">
                            {/* Vertical line */}
                            <div className="w-px h-12 bg-gray-300 mr-4 flex-shrink-0"></div>

                            {/* Star rating content */}
                            <div className="flex flex-col items-start">
                                <div className="flex mb-1">
                                    <span className="text-yellow-500 text-lg hover:scale-125 transition-transform duration-200 cursor-pointer">★</span>
                                    <span className="text-yellow-500 text-lg hover:scale-125 transition-transform duration-200 cursor-pointer">★</span>
                                    <span className="text-yellow-500 text-lg hover:scale-125 transition-transform duration-200 cursor-pointer">★</span>
                                    <span className="text-yellow-500 text-lg hover:scale-125 transition-transform duration-200 cursor-pointer">★</span>
                                    <span className="text-yellow-500 text-lg hover:scale-125 transition-transform duration-200 cursor-pointer">★</span>
                                </div>
                                <span className="text-sm font-medium text-gray-600">99.8% Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Image/Dashboard Section with Scroll Animations */}
            <div className={`relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="relative min-h-[600px]">
                    {/* Main dashboard mockup with enhanced styling and hover effects */}
                    <div className="relative z-10 overflow-hidden rounded-lg mx-auto max-w-5xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group">
                        {/* Bottom left corner accent */}
                        <div className="absolute bottom-3 left-3 w-32 h-32 pointer-events-none">
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded-r-sm"></div>
                            <div className="absolute bottom-0 left-0 w-1 h-full bg-emerald-500 rounded-t-sm"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500 rounded-bl-md"></div>
                        </div>
                        {/* Enhanced Dashboard header with loading animation */}
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
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full animate-pulse hover:scale-110 transition-transform duration-200">Live</span>
                                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full hover:scale-110 transition-transform duration-200">Real-time</span>
                                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:scale-110 transition-transform duration-200">All Orders</span>
                            </div>
                        </div>

                        {/* Enhanced Dashboard main content with loading effect */}
                        <div className=" h-full p-6  transition-all duration-500">
                            <div className="relative overflow-hidden rounded-lg ml-4 mb-4">
                                {/* Loading overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 transition-transform duration-1000 ${isVisible ? 'translate-x-full' : '-translate-x-full'}`}></div>
                                <img
                                    src="/Dashboards-2048x1152.jpg"
                                    alt="Storemate OMS Dashboard"
                                    className="w-full h-auto rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Enhanced floating elements with OMS-relevant content and animations */}

                    {/* 99.8% Success Rate round badge with bounce animation */}
                    <div className={`absolute top-8 right-4 lg:right-12 z-20 hover:scale-110 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-bounce' : ''}`}>
                        <div className="relative">
                            {/* Main circular badge */}
                            <div className="h-24 w-24 rounded-full border-4 border-white bg-gradient-to-br shadow-xl flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-300" style={{background: 'linear-gradient(135deg, #006daf 0%, #0056b3 100%)'}}>
                                <div className="text-white font-bold text-lg leading-none">99.8%</div>
                                <div className="text-white text-xs font-medium opacity-90">Success Rate</div>
                            </div>

                            {/* Animated pulse ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>

                            {/* Status indicator */}
                            <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                                <span className="text-xs font-bold text-white">✓</span>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute top-24 right-0 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                                99.8% Success Rate Achievement!
                                <div className="absolute -top-1 right-4 w-2 h-2 bg-black transform rotate-45"></div>
                            </div>
                        </div>
                    </div>




                    {/* Order Analytics Chart with slide-in animation - moved to top left corner */}
                    <div className={`absolute top-12 left-4 lg:left-12 w-56 lg:w-72 z-30 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300 group">
                            <div className="flex items-center justify-between p-2 border-b border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Order Analytics</h3>
                                <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Last 30 days</span>
                            </div>
                            <div className="relative overflow-hidden">
                                {/* Shimmer loading effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -skew-x-12 transition-transform duration-1500 ${isVisible ? 'translate-x-full' : '-translate-x-full'}`}></div>
                                <img
                                    src="/design-1.jpg"
                                    alt="Order Analytics Chart"
                                    className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders Activity with slide-in animation */}
                    <div className={`absolute -bottom-8 right-4 lg:right-12 w-72 lg:w-80 z-20 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200 hover:border-green-300 transition-colors duration-300 group">
                            <div className="flex items-center justify-between p-2 border-b border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Recent Orders</h3>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-800 transition-colors duration-300 animate-pulse">Live Updates</span>
                            </div>
                            <div className="relative overflow-hidden">
                                {/* Shimmer loading effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -skew-x-12 transition-transform duration-1500 delay-300 ${isVisible ? 'translate-x-full' : '-translate-x-full'}`}></div>
                                <img
                                    src="/design-2-scaled.jpg"
                                    alt="Recent Orders Activity"
                                    className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics floating badge with enhanced animations */}
                    <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 z-25 hover:shadow-xl hover:scale-110 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-500 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium text-gray-700">1M+ Orders Processed</span>
                            </div>
                            <div className="h-4 w-px bg-gray-300"></div>
                            <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-200">
                                <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="font-medium text-gray-700">500+ Active Users</span>
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
                            <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#013387'}}>
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
                            <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#013387'}}>
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
                            <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#013387'}}>
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
        </div>
    );
}
