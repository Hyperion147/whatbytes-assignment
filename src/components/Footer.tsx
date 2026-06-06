import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const icons = [
    {
        a: 1,
        icon: <FaFacebook />,
    },
    {
        a: 2,
        icon: <FaTwitter />,
    },
    {
        a: 3,
        icon: <FaInstagram />,
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-blue-950 text-white md:fixed md:bottom-0">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 md:px-10 md:py-12 lg:px-20">
                <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold">Filters</div>
                    <div>All Electronics</div>
                    <div>&copy; 2026 American</div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold">About Us</div>
                    <div>About Us</div>
                    <div>Contact</div>
                </div>

                {/* using react-icons here because lucide removed company logo support */}
                <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold">Follow Us</div>
                    <div className="flex gap-2">
                        {icons.map((i) => (
                            <div
                                key={i.a}
                                className="rounded-full bg-blue-800 p-2"
                            >
                                {i.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
