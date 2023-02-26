import Slider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link";

export default function Home() {

    return (
        <div style={{ marginTop: '156px' }}>
            <Slider/>


            <div>
                <section id="featured-services" className="featured-services">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title"><a href="">Glasreinigung</a></h4>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/glass-cleaning.png'}  alt={"Glasreinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <p className="description">Mit unserer professionellen Glasreinigung sorgen wir für strahlende Sauberkeit
                                            und klare Sicht in Ihren Räumlichkeiten, egal ob Bürogebäude oder Privathaus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="">Treppenhausreinigung</a></h4>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/treppenhausreinigung.png'}  alt={"Treppenhausreinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <p className="description">Mit unserer professionellen Glasreinigung sorgen wir für strahlende Sauberkeit
                                            und klare Sicht in Ihren Räumlichkeiten, egal ob Bürogebäude oder Privathaus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title"><a href="">Baureinigung</a></h4>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/baureinigung.png'}  alt={"Baureinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                    <p className="description">Ob nach Renovierung, Umbau oder Neubau – unser professionelles Team sorgt dafür, dass Ihre Baustelle in kürzester Zeit sauber und sicher ist, damit Sie sich voll und ganz auf die Fertigstellung konzentrieren können.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Unterhaltsreinigung</a></h4>

                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/unterhaltsreinigung.png'}  alt={"Unterhaltsreinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <p className="description">Mit unserer regelmäßigen Unterhaltsreinigung halten wir Ihre Räumlichkeiten jederzeit in Top-Zustand, damit Sie und Ihre Mitarbeiter sich wohlfühlen und auf das Wesentliche konzentrieren können.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Fassadenreinigung</a></h4>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/fassadenreinigung.png'}  alt={"Fassadenreinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <p className="description">Mit unserer regelmäßigen Unterhaltsreinigung halten wir Ihre Räumlichkeiten jederzeit in Top-Zustand, damit Sie und Ihre Mitarbeiter sich wohlfühlen und auf das Wesentliche konzentrieren können.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-5">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Grundreinigung</a></h4>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <Image src={'/picture/grundreinigung.png'}  alt={"Grundreinigung"} width={120} height={120}/>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
                                        <p className="description">Mit unserer regelmäßigen Unterhaltsreinigung halten wir Ihre Räumlichkeiten jederzeit in Top-Zustand, damit Sie und Ihre Mitarbeiter sich wohlfühlen und auf das Wesentliche konzentrieren können.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="b-example-divider "></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={'/picture/sven.jpg'} className="d-block mx-lg-auto img-fluid" alt="Sven Weber"
                             width="400" height="600" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Geschäftsführer, Gründer und Visionär</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                            world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive
                            grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>


                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link href="/aboutUs">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Mehr über uns</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#106eea" fill-opacity="1" d="M0,288L16,256C32,224,64,160,96,122.7C128,85,160,75,192,64C224,53,256,43,288,64C320,85,352,139,384,165.3C416,192,448,192,480,186.7C512,181,544,171,576,165.3C608,160,640,160,672,160C704,160,736,160,768,154.7C800,149,832,139,864,133.3C896,128,928,128,960,138.7C992,149,1024,171,1056,170.7C1088,171,1120,149,1152,144C1184,139,1216,149,1248,170.7C1280,192,1312,224,1344,202.7C1376,181,1408,107,1424,69.3L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>

            <Accordion/>

            <div className="b-example-divider "></div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">Suchst du Lappen immer noch ein Job?</h1>
                        <p className="lead">Dann bewirb dich und verdiene 13 € die Stunde</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Jetzt Bewerben
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 p-1 overflow-hidden shadow-lg">
                        <img src={'/picture/sven.jpg'} className="d-block mx-lg-auto img-fluid" alt="Sven Weber"
                             width="400" height="600" loading="lazy"/>
                    </div>
                </div>
            </div>


        </div>
    )
}
