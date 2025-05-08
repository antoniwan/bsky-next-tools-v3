import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">

                        <Link href="/terms-of-service">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;