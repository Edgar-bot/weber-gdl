import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'
import { useEffect, useState } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navHeight = 80;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.scrollY > navHeight) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Use useRouter hook from Next.js to get current path
    const router = useRouter();

    return (
        <div className={"shadow fixed-top p-2 mb-2 bg-newBlue bg-opacity-25"}>

            <Link href={"/"} legacyBehavior>
                <a>
                    <Image src={'/picture/logoTrans.png'} alt={'logo'} width={250} height={100} />
                </a>
            </Link>


            <nav id="main-nav" className={isScrolled ? "sticky-top d-none" : ""}>
                <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item">
                        {/* Check if current path is home page */}
                        <a className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} href={`/`}>Home</a>
                    </li>
                    <li className="nav-item">
                        {/* Check if current path is aboutUs page */}
                        <a className={`nav-link ${router.pathname === '/aboutUs' ? 'active' : ''}`} href={"/aboutUs"}>Über uns</a>
                    </li>
                    <li className="nav-item">
                        {/* Check if current path is ourService page */}
                        <a className={`nav-link ${router.pathname === '/ourService' ? 'active' : ''}`} href={"/ourService"}>Unser Service</a>
                    </li>
                    <li className="nav-item">
                        {/* Check if current path is contact page */}
                        <a className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`} href={"/contact"}>Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Karriere</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
