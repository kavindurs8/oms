import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function FreeCourse({ auth }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);

        // Intersection Observer for scroll effect
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
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

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        // Handle multiple YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,  // youtube.com/watch?v=VIDEO_ID
            /(?:youtube\.com\/embed\/)([^&\n?#]+)/,    // youtube.com/embed/VIDEO_ID
            /(?:youtu\.be\/)([^&\n?#]+)/,              // youtu.be/VIDEO_ID
            /(?:youtube\.com\/v\/)([^&\n?#]+)/         // youtube.com/v/VIDEO_ID
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1] && match[1].length === 11) {
                return match[1];
            }
        }

        return null;
    };

    // Function to get YouTube thumbnail URL with multiple fallbacks
    const getYouTubeThumbnail = (url) => {
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            // Start with hqdefault as it's more commonly available than maxresdefault
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    // Video course data organized by sections
    const courseModules = [
        {
            title: "Getting Started with Storemate OMS",
            description: "Learn the fundamentals and understand why Storemate is perfect for online sellers",
            videos: [
                {
                    title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                    url: "https://youtu.be/EwXu1ovEBFY?si=KsMr7XC90wCi3WyM",
                    duration: "1:54",
                    description: "Why POS Software doesn't suit online sellers and what they need instead"
                },
                {
                    title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                    url: "https://youtu.be/BiRqNy6KkJU?si=NDSZwL-ZGxFJ3IAs",
                    duration: "2:03",
                    description: "Discover the most reliable sales channels for Sri Lankan e-commerce businesses"
                },
                {
                    title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                    url: "https://youtu.be/NcHyxW8aglA?si=aatb_TOb3nEFwD0T",
                    duration: "3:41",
                    description: "Getting leads but no sales? Learn how to convert leads effectively"
                },
                {
                    title: "Order Sync with Courier Partner",
                    url: "https://youtu.be/XjxDV-ab7QU?si=1R21NMOf5PLp-Yyg",
                    duration: "1:00",
                    description: "How to synchronize orders with your courier delivery partners"
                },
                {
                    title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                    url: "https://youtu.be/-CYtv4drzyo?si=yq8utB6BZVlueoC4",
                    duration: "4:51",
                    description: "Complete guide on making your online business operations smooth with Storemate OMS"
                }
            ]
        },
        {
            title: "System Features & Management",
            description: "Master the core features including search, inquiries, products, customers and users",
            videos: [
                {
                    title: "Global Search | Online Order Management Software",
                    url: "https://youtu.be/1nWyiEuQd88?si=jn0WZdg9EBd3i7tM",
                    duration: "1:01",
                    description: "Use the powerful global search feature to find anything quickly"
                },
                {
                    title: "How to Add Inquiry",
                    url: "https://youtu.be/W0mCCdN9iTU?si=wV7znSlv3XiDf6vU",
                    duration: "3:11",
                    description: "Step-by-step guide to add and manage customer inquiries"
                },
                {
                    title: "Inquiry Table",
                    url: "https://youtu.be/YfkflwDGv-k?si=X3wmDoA3kUvsoOVk",
                    duration: "3:32",
                    description: "Navigate and manage your inquiry table effectively"
                },
                {
                    title: "How to Add Product",
                    url: "https://youtu.be/QarGtLOKNuA?si=3HDnljDBO7yvqwEE",
                    duration: "4:01",
                    description: "Complete guide to adding products to your inventory system"
                },
                {
                    title: "How to Add Customer",
                    url: "https://youtu.be/rSE2VB7Ybsc?si=1i0_e7TYTzuaifV_",
                    duration: "2:56",
                    description: "Learn how to add and manage customer information"
                },
                {
                    title: "How to Add User Role",
                    url: "https://youtu.be/qIy6InWyC0U?si=NIQnvKJFe_uK3pcz",
                    duration: "2:38",
                    description: "Set up user roles and permissions for your team"
                },
                {
                    title: "How to Add User",
                    url: "https://youtu.be/WZMhL7v0lwM?si=KpLn96zw0k5gKNFz",
                    duration: "3:13",
                    description: "Add new users to your Storemate OMS system"
                }
            ]
        },
        {
            title: "Courier Integration & COD Business",
            description: "Learn to work with courier companies and set up Cash on Delivery operations",
            videos: [
                {
                    title: "How to Work with Courier Company",
                    url: "https://youtu.be/vyJsy8sW4_o?si=it1jUtg6TvvFqy_W",
                    duration: "Video Length",
                    description: "Complete guide to partnering and working with courier companies"
                },
                {
                    title: "How to Register with Delivery Partner",
                    url: "https://youtu.be/Int_5tFzjvM?si=aKBDJUDokBNmZ-44",
                    duration: "7:03",
                    description: "Step-by-step registration process with delivery partners"
                },
                {
                    title: "How to Apply COD Business",
                    url: "https://youtu.be/ZNNfJWGM04E?si=sIEmiJKODaIVWoxL",
                    duration: "4:01",
                    description: "Set up and manage Cash on Delivery business operations"
                },
                {
                    title: "What is COD? (Cash on Delivery)",
                    url: "https://youtu.be/GsLzFLNVo68?si=4qCCVcMUHB8jpOmM",
                    duration: "3:10",
                    description: "Understanding Cash on Delivery and its benefits for your business"
                }
            ]
        }
    ];

    return (
        <MainLayout>
            <Head title="Free Course - Storemate OMS Training" />
            <Header auth={auth} />

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                            backgroundSize: '50px 50px'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>
                </div>

                <div className="relative py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            {/* Badge */}
                            <div className="mb-6">
                                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest shadow-lg" style={{
                                    color: '#006daf',
                                    backgroundColor: '#ffe6daff'
                                }}>
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    FREE STOREMATE OMS COURSE
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6" style={{
                                fontWeight: '750',
                                fontStretch: 'ultra-condensed',
                                letterSpacing: '-0.03em',
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }}>
                                Master Storemate OMS
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                                Learn how to streamline your order management, reduce returns by 80%+, and save 3+ hours daily with our comprehensive free video course.
                            </p>

                            {/* Course Stats */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
                                    <div className="text-gray-600">Video Tutorials</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                                    <div className="text-gray-600">Learning Modules</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                    <div className="text-gray-600">Free Access</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Modules */}
            <div ref={componentRef} className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-12">
                        {courseModules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className={`transition-all duration-1000 delay-${moduleIndex * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                {/* Module Header */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                                        Module {moduleIndex + 1}
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{module.title}</h2>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{module.description}</p>
                                </div>

                                {/* Videos Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {module.videos.map((video, videoIndex) => {
                                        const thumbnailUrl = getYouTubeThumbnail(video.url);
                                        return (
                                            <div key={videoIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                                                {/* Video Thumbnail */}
                                                <div className="relative aspect-video overflow-hidden">
                                                    {thumbnailUrl ? (
                                                        <img
                                                            src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/maxresdefault.jpg`}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                                                            onError={(e) => {
                                                                const videoId = getYouTubeVideoId(video.url);
                                                                if (videoId) {
                                                                    // Try multiple fallback thumbnail qualities
                                                                    if (e.target.src.includes('maxresdefault')) {
                                                                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                                                    } else if (e.target.src.includes('hqdefault')) {
                                                                        e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                                                                    } else if (e.target.src.includes('mqdefault')) {
                                                                        e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                                                                    } else {
                                                                        // If all thumbnails fail, hide the image and show gradient background
                                                                        e.target.style.display = 'none';
                                                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                                                    )}

                                                    {/* Dark overlay */}
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

                                                    {/* Play button */}
                                                    <a
                                                        href={video.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="absolute inset-0 flex items-center justify-center z-10"
                                                    >
                                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-red-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                                            </svg>
                                                        </div>
                                                    </a>

                                                    {/* Duration badge */}
                                                    <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                                                        {video.duration}
                                                    </div>
                                                </div>

                                                {/* Video Info */}
                                                <div className="p-6">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                        {video.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {video.description}
                                                    </p>
                                                    <div className="mt-4">
                                                        <a
                                                            href={video.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                                                        >
                                                            Watch Video
                                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
