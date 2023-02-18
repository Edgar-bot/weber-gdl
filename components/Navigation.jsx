import Link from "next/link";
import Image from 'next/image'
import {useEffect, useState} from "react";

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

    return (
        <div className={"shadow fixed-top p-2 mb-2 bg-turkis1"}>

            <div className={"d-flex justify-content-start align-items-center"}>
                <Link href={"/"} legacyBehavior>
                    <a>
                        <Image src={'/picture/logoTurkis.jpg'} alt={'logo'} width={180} height={75}/>
                    </a>
                </Link>
            </div>

            <nav id="main-nav" className={isScrolled ? "sticky-top d-none" : ""}>
                <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href={`/`}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/aboutUs"}>Über uns</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/ourService"}>Unser Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/contact"}>Kontakt</a>
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
