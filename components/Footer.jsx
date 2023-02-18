import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <div className={"d-flex justify-content-center text-bg-black bg-turkis1"}>
            <h6> 📞+49 1522-9815940 | 📧 info@weber-gebaeudedienstleistung.de |
            <Link href={"https://www.instagram.com/weber_gdl/"} legacyBehavior>
            <a>
                <Image src={'/picture/instagramLogo.png'} alt={'insta'} width={25} height={25}/>
            </a>
            </Link>
            weber_gdl</h6>
        </div>
    )
}