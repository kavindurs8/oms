<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/partner-program', function () {
    return Inertia::render('PartnerProgram');
})->name('partner.program');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact.us');

Route::get('/inquiry', function () {
    return Inertia::render('Inquiry');
})->name('inquiry');

Route::get('/sales-management', function () {
    return Inertia::render('SalesManagement');
})->name('sales.management');

Route::get('/shipping-packing', function () {
    return Inertia::render('ShippingPacking');
})->name('shipping.packing');

Route::get('/user-contact-product', function () {
    return Inertia::render('UserContactProduct');
})->name('user.contact.product');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/new-dashboard', function () {
    return Inertia::render('New_Dashboard');
})->name('new.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
