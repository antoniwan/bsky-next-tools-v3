import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { ColorModeButton } from "./ui/color-mode";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-background text-foreground">
            <Link href="/" className="text-xl font-bold">
                bsky-next-tools-v3
            </Link>
            <nav className="flex space-x-4">
                <Link href="/login">
                    <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-600">Login or Signup</Button>
                </Link>
                <Link href="/about#instructions" className="hover:underline">
                    Instructions
                </Link>
                <ColorModeButton />
            </nav>
        </header>
    );
};

export default Header;