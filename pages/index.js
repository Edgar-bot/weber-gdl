import Slider from "@/components/Slider";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ marginTop: '150px' }}>
        <Slider/>
        <div>
            <section id="featured-services" className="featured-services">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><a href="">Glasreinigung</a></h4>
                                <p className="description">Mit unserer professionellen Glasreinigung sorgen wir für strahlende Sauberkeit und klare Sicht in Ihren Räumlichkeiten, egal ob Bürogebäude oder Privathaus.</p>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                    <Image src={'/picture/glass-cleaning.png'}  alt={"Glasreinigung"} width={120} height={120}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><a href="">Hausmeisterdienst</a></h4>
                                <p className="description">Unser zuverlässiger Hausmeisterservice kümmert sich um alle anfallenden Aufgaben rund um Ihr Gebäude, von der regelmäßigen Reinigung über Reparatur- und Wartungsarbeiten bis hin zur Betreuung der Grünanlagen.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4 className="title"><a href="">Baureinigung</a></h4>
                                <p className="description">Ob nach Renovierung, Umbau oder Neubau – unser professionelles Team sorgt dafür, dass Ihre Baustelle in kürzester Zeit sauber und sicher ist, damit Sie sich voll und ganz auf die Fertigstellung konzentrieren können.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><a href="">Unterhaltsreinigung</a></h4>
                                <p className="description">Mit unserer regelmäßigen Unterhaltsreinigung halten wir Ihre Räumlichkeiten jederzeit in Top-Zustand, damit Sie und Ihre Mitarbeiter sich wohlfühlen und auf das Wesentliche konzentrieren können.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="my-col-class shadow my-3 bg-info" xs={12} md={6}>
            Ihre Vorteile
        </div>

            <Image src={'/picture/bannerCleaning.jpg'}  alt={"Glasreinigung"} width={1000} height={330}
                   style={{ float: 'right', marginLeft: '20px' }}/>


        <div className="row justify-content-center">
            <div className="my-col-class shadow my-3 col-xs-12 col-md-6 mx-auto">
                <iframe src="https://www.instagram.com/reel/CouKr_6O3nq/embed/" width="800" height="800"
                        frameBorder="1" scrolling="yes" allowFullScreen></iframe>
            </div>
        </div>

    </div>

  )
}
