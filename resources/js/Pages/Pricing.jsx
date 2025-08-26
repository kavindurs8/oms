import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function Pricing() {
    return (
        <>
            <Head title="Pricing" />
            <Header />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're on the pricing page!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
