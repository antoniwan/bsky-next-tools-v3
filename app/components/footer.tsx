import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { FaTwitter as TwitterIcon, FaGithub as GitHubIcon } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-4 bg-gray-800 text-white">
            <div className="flex flex-col items-center space-y-2">
                <p>
                    <Link href="https://github.com/antoniwan/bsky-next-tools-v3" target="_blank" className="hover:underline">
                        ✨ Open Source Code ✨
                    </Link>
                </p>
                <div>
                    <Link href="/about" className="hover:underline">
                        About the tool
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <IconButton aria-label="Twitter" icon={<TwitterIcon />} />
                    <IconButton aria-label="GitHub" icon={<GitHubIcon />} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;