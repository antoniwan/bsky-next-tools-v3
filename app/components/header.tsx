import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    bsky-next-tools-v3
                </Link>
                <nav className="flex space-x-4">
                    <Link href="/login-signup">
                        <Button>Login or Signup</Button>
                    </Link>
                    <Link href="/about">
                        Instructions
                    </Link>
                    <Link href="/contact">
                        @ Source Code
                    </Link>
                </nav>
            </div>
        </header >
    );
};

export default Header;