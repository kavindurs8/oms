import { useState, useEffect } from 'react';

export default function StoremateFeatures() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Loading animation trigger
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        {/* Small Blue Title */}
                        <div className="mb-6">
                            <div className="w-8 h-1 mb-3" style={{backgroundColor: '#006daf'}}></div>
                            <p className="text-base font-medium" style={{color: '#006daf'}}>
                                Storemate Order Management System
                            </p>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl font-black mb-8" style={{
                            fontWeight: '900',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                            color: '#2D3748',
                            lineHeight: '1.1'
                        }}>
                            What is Storemate OMS?
                        </h1>

                        {/* Description */}
                        <div className="space-y-6 mb-8">
                            <p className="text-lg leading-relaxed" style={{color: '#4A5568'}}>
                                Storemate OMS is built for Sri Lankan E-Commerce/Online sellers who want to stay organized.
                            </p>

                            <p className="text-lg leading-relaxed" style={{color: '#4A5568'}}>
                                Manage all inquiries, orders, and deliveries in one place, <strong style={{color: '#2D3748'}}>avoid fake/duplicate orders</strong>, and <strong style={{color: '#2D3748'}}>auto-sync</strong> with your courier in just one click.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more excel uploads</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more missed follow ups</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more returns</span>
                            </div>
                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl hover:scale-105 transition-all duration-500" style={{backgroundColor: '#F7FAFC'}}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#E0F2F1'}}>
                                    <svg className="w-6 h-6" style={{color: '#006daf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{color: '#2D3748'}}>
                                    Fewer Duplicate Orders
                                </h3>
                                <p className="text-sm leading-relaxed" style={{color: '#4A5568'}}>
                                    Smart detection stops double shipping before it happens.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl hover:scale-105 transition-all duration-500" style={{backgroundColor: '#F7FAFC'}}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#E0F2F1'}}>
                                    <svg className="w-6 h-6" style={{color: '#006daf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{color: '#2D3748'}}>
                                    Reduction in Return Losses
                                </h3>
                                <p className="text-sm leading-relaxed" style={{color: '#4A5568'}}>
                                    Block fake customers early and avoid unnecessary courier costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Interface Showcase */}
                    <div className={`relative transition-all duration-1200 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative h-96 overflow-visible">
                            {/* Large Blue Circle Background */}
                            <div className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full transform -translate-x-1/2 translate-y-1/2" style={{
                                background: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 50%, #2563EB 100%)'
                            }}></div>

                            {/* Left Modal - Add a New Flow */}
                            <div className="absolute top-4 left-4 w-72 h-80 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-700 z-20 overflow-hidden">
                                <img
                                    src="/Delivery-Status.png"
                                    alt="Left Modal - Add a New Flow"
                                    className="w-full h-full object-cover rounded-2xl"
                                    onError={(e) => {
                                        // Replace with gradient fallback
                                        const parent = e.target.parentNode;
                                        if (parent) {
                                            const div = document.createElement('div');
                                            div.className = 'w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center';
                                            div.innerHTML = '<div class="text-center text-white"><svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg><p class="text-lg font-semibold">Left Modal - Add a New Flow</p></div>';
                                            parent.replaceChild(div, e.target);
                                        }
                                    }}
                                />
                            </div>

                            {/* Right Modal - Advanced Settings */}
                            <div className="absolute bottom-8 right-8 w-64 h-72 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-700 z-10 overflow-hidden">
                                <img
                                    src="/design-9-1-scaled.jpg"
                                    alt="Right Modal - Advanced Settings"
                                    className="w-full h-full object-cover rounded-2xl"
                                    onError={(e) => {
                                        // Replace with gradient fallback
                                        const parent = e.target.parentNode;
                                        if (parent) {
                                            const div = document.createElement('div');
                                            div.className = 'w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center';
                                            div.innerHTML = '<div class="text-center text-white"><svg class="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><p class="text-sm font-semibold">Right Modal - Advanced Settings</p></div>';
                                            parent.replaceChild(div, e.target);
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
