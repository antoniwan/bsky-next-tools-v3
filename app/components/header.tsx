import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div>
                <Link href="/">
                    bsky-next-tools-v3
                </Link>
                <nav>
                    <Link href="/login">
                        <Button size="sm" >Login or Signup</Button>
                    </Link>
                    <Link href="/about#instructions" >
                        Instructions
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;