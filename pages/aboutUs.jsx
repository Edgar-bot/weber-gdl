import Image from "next/image";


export default function AboutUs() {

    return(
        <section className="contact mt-5">
        <div className="about-description">
            <h1> Unser Unternehmen</h1>

            <h4>
                Weber Gebäudedienstleistung wurde 2019 von Sven Weber in Schwäbisch Gmünd gegründet und basiert auf seiner jahrelangen Erfahrung in der Baubranche sowie einer abgeschlossenen Berufsausbildung. Während der Corona-Krise hat das Unternehmen wertvolle Erfahrungen gesammelt und ist stolz darauf, ein vertrauenswürdiger Partner für seine Kunden zu sein.
            </h4>

            <h4>
                Das Wohl unserer Mitarbeiter liegt uns bei Weber Gebäudedienstleistung sehr am Herzen. Wir legen großen Wert auf ein gutes Arbeitsklima und die persönliche Entwicklung unserer Mitarbeiter durch regelmäßige Schulungen und Weiterbildungen. Nur so können wir unsere Mitarbeiter langfristig halten und ein exzellentes Reinigungsergebnis für unsere Kunden erzielen.
            </h4>

            <h4>
                Unser Ziel ist es, unseren Kunden stets eine exzellente Reinigungsleistung zu bieten, die auf ihre individuellen Bedürfnisse zugeschnitten ist. Wir legen dabei besonderen Wert auf Kundenzufriedenheit und streben danach, die Erwartungen unserer Kunden zu übertreffen. Wir sind stolz darauf, langfristige Beziehungen zu unseren Kunden aufzubauen und ihnen eine zuverlässige und professionelle Dienstleistung anzubieten.
            </h4>

            <h4>
                Als Unternehmen setzen wir uns aktiv für Nachhaltigkeit ein und möchten unseren ökologischen Fußabdruck minimieren. Deshalb arbeiten wir ausschließlich mit umweltfreundlichen Reinigungsprodukten. Wir glauben, dass es unsere Verantwortung ist, zur Erhaltung einer gesunden Umwelt beizutragen und eine nachhaltige Arbeitsweise zu fördern.
            </h4>

            <h4>
                Dank des Vertrauens und der Unterstützung, die wir von unseren Kunden und der Gemeinschaft erhalten, sind wir stolz darauf, ein Teil der lokalen Gemeinschaft zu sein. Wir nehmen an verschiedenen gemeinnützigen Projekten teil und möchten ein positiver Einfluss auf die Region sein.
            </h4>

            <h4>
                Mit unseren Expansionsplänen haben wir große Ziele für die Zukunft. Wir möchten weiterhin wachsen und unsere Dienstleistungen auf weitere Regionen ausdehnen, um noch mehr Kunden zu erreichen. Gleichzeitig bleiben wir unserem Engagement für Qualität, Kundenzufriedenheit und Nachhaltigkeit treu.
            </h4>

        </div>
            <div className="row justify-content-center">
                <div className="col-6 d-flex justify-content-center mt-4">
                    <Image src="/picture/sven.jpg" alt="Sven Weber" width={500} height={500} style={{borderRadius: '40%/60%', border: '5px solid black'}} />
                </div>
            </div>
        </section>
    )}