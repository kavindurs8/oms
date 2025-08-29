import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Pricing from '@/Components/Pricing';
import CallToAction from '@/Components/CallToAction';
import Faq from '@/Components/Faq';

export default function PricingPage({ auth }) {
    return (
        <>
            <Head title="Pricing - Storemate OMS" />
            <Header auth={auth} />
            <Pricing />
            <Faq />
            <CallToAction />
            <Footer />
        </>
    );
}
