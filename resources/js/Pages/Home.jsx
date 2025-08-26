import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import { Head } from '@inertiajs/react';
import StoremateInfo from '@/Components/StoremateInfo';
import StoremateFeatures from '@/Components/StoremateFeatures';
import Pricing from '@/Components/Pricing';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />
            <Header auth={auth} />
            <Hero />
            <StoremateInfo />
            <StoremateFeatures />
            <Pricing />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're on the home page!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
