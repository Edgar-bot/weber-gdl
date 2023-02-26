import {Carousel} from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="my-col-class shadow mt-7 " xs={12} md={6}>
            <Carousel controls = {false} fade={true} interval={5000}>
                <Carousel.Item>
                    <section id="hero" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Herzlich Willkommen bei <span>Webergebäudedienstleistung</span></h1>
                            <h4 style={{ fontFamily: 'Montserrat' }}>
                                Sauberkeit ist unsere Stärke, Zufriedenheit Ihr Gewinn.
                            </h4>
                            <div className="d-flex">
                                <a href={`/contact`} className="btn-get-started scrollto">Unser Service</a>
                            </div>
                        </div>
                    </section>
                </Carousel.Item>

                <Carousel.Item>
                    <section id="hero" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Herzlich Willkommen bei <span>Sven</span></h1>
                            <h4 style={{ fontFamily: 'Montserrat' }}>
                                Sauberkeit ist unsere Stärke, Zufriedenheit Ihr Gewinn.
                            </h4>
                            <div className="d-flex">
                                <a href={`/contact`} className="btn-get-started scrollto">Unser Service</a>
                            </div>
                        </div>
                    </section>
                </Carousel.Item>

                {/*<Carousel.Item>
                    <section id="hero1" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Herzlich Willkommen bei <span>Weber</span></h1>
                            <div className="d-flex">
                                <a href={`/contact`}  className="btn-get-started scrollto">Unser Service</a>
                            </div>
                        </div>
                    </section>
                </Carousel.Item>*/}

                <Carousel.Item>
                    <section id="hero" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Herzlich Willkommen bei <span>Slavik</span></h1>
                            <h4 style={{ fontFamily: 'Montserrat' }}>
                                Sauberkeit ist unsere Stärke, Zufriedenheit Ihr Gewinn.
                            </h4>
                            <div className="d-flex">
                                <a href={`/contact`} className="btn-get-started scrollto">Unser Service</a>
                            </div>
                        </div>
                    </section>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}