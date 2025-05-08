import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p >
                        &copy;? ✨ Open Souce ✨
                    </p>
                    <div >
                        <Link href="/about" className="hover:underline">
                            About the tool
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;