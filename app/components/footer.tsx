import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-background text-foreground py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/terms-of-service" className="hover:underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;