import Slider from "@/components/Slider";
import {Col, Container, Row} from "react-bootstrap";

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

        <div className="my-col-class shadow my-3 bg-info" xs={12} md={6}>
            Unsere Bewertung

        </div>
    </div>

  )
}
