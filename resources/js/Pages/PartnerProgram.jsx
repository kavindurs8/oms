import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function PartnerProgram() {
    return (
        <>
            <Head title="Partner Program" />
            <Header />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're on the partner program page!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
