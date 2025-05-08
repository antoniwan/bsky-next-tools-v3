import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-lg font-bold text-foreground">
                    bsky-next-tools-v3
                </Link>
                <nav className="flex space-x-6">
                    <Link href="/login-signup">
                        <Button size="sm" colorScheme="blue">Login or Signup</Button>
                    </Link>
                    <Link href="/about" className="hover:underline">
                        Instructions
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        @ Source Code
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;