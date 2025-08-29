import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { useState } from 'react';

export default function Header({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <nav className="shadow-sm relative z-[9999]">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                <div className="flex h-24 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/home">
                                <img src="/oms-v1.png" alt="Logo" className="block h-16 w-auto" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                <NavLink href={route('home')} active={route().current('home')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Home
                                </NavLink>
                                <NavLink href={route('pricing')} active={route().current('pricing')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Pricing
                                </NavLink>
                                <NavLink href={route('about')} active={route().current('about')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    About Us
                                </NavLink>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer">
                                            Features
                                            <svg className="ml-1 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href="/inquiry">Inquiry</Dropdown.Link>
                                        <Dropdown.Link href={route('sales.management')}>Sales Management</Dropdown.Link>
                                        <Dropdown.Link href={route('shipping.packing')}>Shipping & Packing</Dropdown.Link>
                                        <Dropdown.Link href={route('user.contact.product')}>User, Contact, Product</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                <NavLink href={route('partner.program')} active={route().current('partner.program')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Partner Program
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer">
                                    Login
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('login')}>Login to POS (Lite)</Dropdown.Link>
                                <Dropdown.Link href={route('login')}>Login to POS (Pro)</Dropdown.Link>
                                <Dropdown.Link href={route('login')}>Login to OMS</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <Link
                            href={route('contact.us')}
                            className="ml-4 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-custom-blue-2 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-custom-blue-3"
                        >
                            Start a Free Trial
                        </a>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <NavLink href={route('home')} active={route().current('home')} block="true">
                        Home
                    </NavLink>
                    <NavLink href={route('pricing')} active={route().current('pricing')} block="true">
                        Pricing
                    </NavLink>
                    <NavLink href={route('about')} active={route().current('about')} block="true">
                        About Us
                    </NavLink>
                    <NavLink href="#" block="true">
                        Features
                    </NavLink>
                    <NavLink href={route('partner.program')} active={route().current('partner.program')} block="true">
                        Partner Program
                    </NavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">
                            {auth.user ? auth.user.name : 'Guest'}
                        </div>
                        <div className="font-medium text-sm text-gray-500">
                            {auth.user ? auth.user.email : ''}
                        </div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <NavLink href={route('login')} block="true">Login</NavLink>
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
