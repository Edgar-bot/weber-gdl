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
                    <Image className={"d-block w-100 rounded-3"} data-aos="zoom-out" src={'/picture/cleaniing.jpg'} alt={"bild1"}
                           width={500} height={600}/>
                </Carousel.Item>

                <Carousel.Item>
                    <section id="hero" className="d-flex align-items-center">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1>Herzlich Willkommen bei <span>Webergebäudedienstleistung</span></h1>
                            <div className="d-flex">
                                <a href={`/contact`}  className="btn-get-started scrollto">Unser Service</a>
                            </div>
                        </div>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className={"d-block w-100 rounded-3"} src={'/picture/worker.jpg'} alt={"sven"}
                           width={500} height={600}/>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}