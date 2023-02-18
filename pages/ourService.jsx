import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";

export default function OurService() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Glasreinigung</h1>
                        <p className="service-description">
                            Blick durch klare Fenster? Wir machen das möglich! Unsere
                            Glasreinigungsdienste sind auf die Bedürfnisse unserer Kunden
                            zugeschnitten und wir garantieren eine sorgfältige und gründliche
                            Reinigung. Unser Team verwendet nur die besten Reinigungsmittel und
                            Werkzeuge, um sicherzustellen, dass Ihre Fenster makellos und
                            strahlend aussehen. Wir bieten eine Vielzahl von
                            Reinigungsdienstleistungen an, darunter die Reinigung von Fenstern,
                            Glastüren, Spiegeln und Glaswänden. Kontaktieren Sie uns, um Ihre
                            Glasreinigungstermine zu vereinbaren.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Baureinigung</h1>
                        <p className="service-description">
                            Unser Team von erfahrenen Reinigungskräften bietet eine gründliche
                            und effiziente Baureinigungsdienste für private und gewerbliche
                            Kunden. Wir sind spezialisiert auf die Reinigung von Baustellen und
                            bieten eine umfassende Reinigung, die die Entfernung von Staub,
                            Schmutz und anderen Rückständen beinhaltet. Wir arbeiten schnell und
                            effizient, um sicherzustellen, dass Ihre Immobilie nach Abschluss
                            der Bauarbeiten in bestem Zustand ist. Kontaktieren Sie uns für eine
                            schnelle und professionelle Baureinigung
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Unterhaltsreinigung</h1>
                        <p className="service-description">
                            Wir bieten professionelle Unterhaltsreinigungsdienste für
                            Geschäfts- und Privatkunden an. Unser Team von erfahrenen
                            Reinigungskräften sorgt für eine regelmäßige Reinigung und
                            Instandhaltung Ihrer Immobilie, damit Sie sich auf Ihr Geschäft
                            oder Ihr Privatleben konzentrieren können. Wir bieten eine breite
                            Palette von Dienstleistungen an, darunter die Reinigung von Büros,
                            Schulen, Einkaufszentren, Wohnungen und vieles mehr. Kontaktieren Sie
                            uns, um unsere Unterhaltsreinigungsdienste in Anspruch zu nehmen und
                            ein individuelles Angebot zu erhalten.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Treppenhausreinigung</h1>
                        <p className="service-description">
                            Für die Treppenhausreinigung bieten wir Ihnen eine professionelle
                            Reinigung von Treppenhäusern in Wohn- und Geschäftshäusern an. Wir
                            sorgen für eine gründliche Reinigung von Handläufen, Stufen und
                            Geländern, um ein sauberes und sicheres Umfeld zu schaffen. Unsere
                            erfahrenen Reinigungskräfte verwenden die besten Reinigungsmittel
                            und Werkzeuge, um ein optimales Ergebnis zu erzielen. Kontaktieren
                            Sie uns für eine individuelle Beratung und ein unverbindliches Angebot.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Fassadenreinigung</h1>
                        <p className="service-description">
                            Bei der Fassadenreinigung sorgen wir für eine effektive und schonende Reinigung von Fassaden an
                            Wohn- und Geschäftshäusern. Wir entfernen Schmutz, Staub, Algen und andere Verunreinigungen, um das ästhetische
                            Erscheinungsbild Ihrer Immobilie wiederherzustellen. Unser Team von erfahrenen Reinigungskräften arbeitet schnell
                            und effizient, um eine reibungslose Reinigung zu gewährleisten. Kontaktieren Sie uns, um Ihre Fassadenreinigung zu planen.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                    <div className="service-image">
                        <Image src={'/picture/cleaniing.jpg'}  alt={"Glasreinigung"} width={1000} height={330}/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="service-info">
                        <h1 className="service-title">Grundreinigung</h1>
                        <p className="service-description">
                            Die Grundreinigung ist eine gründliche Reinigung, die alle
                            Oberflächen Ihrer Immobilie umfasst. Wir reinigen alle Räume von Böden, Wänden, Decken
                            und Oberflächen bis hin zu Möbeln und Einrichtungsgegenständen. Unsere erfahrenen Reinigungskräfte
                            verwenden spezielle Reinigungsmittel und Werkzeuge, um auch hartnäckige Verschmutzungen zu entfernen.
                            Kontaktieren Sie uns, um eine individuelle Beratung und ein Angebot für Ihre Grundreinigung zu erhalten
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}
