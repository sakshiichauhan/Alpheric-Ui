import { Download } from 'lucide-react';
import React from 'react';
const date = new Date();

const Footer = () => {
    return (
        <footer className=" container mx-auto px-6 py-12 font-urbanist mt-20">
            <div className="grid grid-cols-3 gap-20 mb-20">
                {/* Left Column */}
                <div className="space-y-6 text-4xl gap-4">
                    <div>
                        <h3 className="text-xl mb-4">Say Hello 👋</h3>
                        <div className="space-y-2">
                            <p><a href="">LinkedIn</a></p>
                            <p><a href="https://www.instagram.com/alpheric.consultants/" target='_blank'>Instagram</a></p>
                            <p><a href="">Dribbble</a></p>
                            <p><a href="">Behance</a></p>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-6 text-4xl">
                    <div>
                        <h3 className="text-xl mb-4">Consult</h3>
                        <div className="space-y-2">
                            <p>Design</p>
                            <p>Build</p>
                            <p>Host</p>
                            <p>Secure</p>
                            <p>Market</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 text-4xl">
                    <div>
                        <h3 className="text-xl mb-4">About Us</h3>
                        <div className="space-y-2">
                            <p>Career</p>
                            <p>Actions</p>
                            <p>Insights</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t pt-8">
                <div className="mb-8">
                    <p className="text-gray-600 mb-4">For whose daily routines involve PDF presentations</p>
                    <button className="flex items-center gap-2 text-black">
                        Download & Share PDF ☺️ <Download className="ml-1" />
                    </button>
                </div>

                {/* Footer Links */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>© {date.getFullYear()} Alpheric</p>
                    <div className="flex gap-8">
                        <a href="#">Sitemap</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Goto Top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
