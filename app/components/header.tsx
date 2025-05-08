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
                    <Link href="/login-signup">
                        <Button size="sm" >Login or Signup</Button>
                    </Link>
                    <Link href="/about" >
                        Instructions
                    </Link>
                    <Link href="/contact">
                        @ Source Code
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;