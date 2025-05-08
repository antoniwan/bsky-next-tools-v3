import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p >
                        <Link href="https://github.com/antoniwan/bsky-next-tools-v3" target="_blank">✨ Open Source Code ✨</Link>
                    </p>
                    <div >
                        <Link href="/about">
                            About the tool
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;