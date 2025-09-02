import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import { Head } from '@inertiajs/react';
import StoremateInfo from '@/Components/StoremateInfo';
import StoremateFeatures from '@/Components/StoremateFeatures';
import Pricing from '@/Components/Pricing';
import HowItWorks from '@/Components/HowItWorks';
import Faq from '@/Components/Faq';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import PowerOfCurfox from '@/Components/PowerOfCurfox';
import MainLayout from '@/Layouts/MainLayout';

export default function Home({ auth }) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Header auth={auth} />
            <Hero />
            <StoremateInfo />
            <StoremateFeatures />
            <Pricing />
            <HowItWorks />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
