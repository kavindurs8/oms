import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';

export default function ContactUs({ auth }) {
    return (
        <>
            <Head title="Contact Us" />
            <Header auth={auth} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Contact Us Page</div>
                    </div>
                </div>
            </div>
        </>
    );
}
