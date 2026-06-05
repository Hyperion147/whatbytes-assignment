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
        <div className="absolute bottom-0 flex justify-between w-full pl-20 py-12 pr-40 bg-blue-950 text-white">
            <div className="gap-4 flex flex-col">
                <div className="font-bold text-xl">Filters</div>
                <div>All Electronics</div>
                <div>&copy; 2026 American</div>
            </div>
            <div className="gap-4 flex flex-col">
                <div className="text-xl font-bold">About Us</div>
                <div className="">About Us</div>
                <div className="">Contact</div>
            </div>
            {/* using react-icons here because lucide removed company logo support */}
            <div className="gap-4 flex flex-col">
                <div className="font-bold text-xl">Follow Us</div>
                <div className="flex gap-2">
                    {icons.map((i) => (
                        <div
                            key={i.a}
                            className="rounded-full p-2 bg-blue-800"
                        >
                            {i.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
