import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-raleway">
            <Navbar />

            {/* 3. flex-grow (or flex-1) pushes the footer to the very bottom */}
            <main className="grow p-8">
                <h1 className="text-5xl font-extrabold text-slate-900">
                    This is Raleway
                </h1>

                <p className="mt-4 text-lg text-slate-600">
                    This paragraph uses the default system sans-serif.
                </p>
            </main>

            <Footer />
        </div>
    );
};

export default PricingPage;