import {Button, Card} from "react-bootstrap";
import React, {useState} from "react";


export default function Accordion() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
    };

    const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
    };

    return (
        <div className="container col-xxl-8 px-4 py-5">

            <h1> 5 gute Gründe für Webergebäudereinigung</h1>

            <div className="b-example-divider1"></div>


            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className={`accordion-button ${isOpen1 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded={isOpen1}
                            aria-controls="panelsStayOpen-collapseOne"
                            onClick={toggleAccordion1}
                        >
                            Verbesserung der Gesundheit
                            <i className={`bi bi-caret-${isOpen1 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className={`accordion-collapse collapse ${isOpen1 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            Eine regelmäßige Reinigung hilft dabei, die Ausbreitung von Bakterien,
                            Viren und Allergenen zu reduzieren. Dies kann dazu beitragen, dass die
                            Luftqualität verbessert wird, insbesondere für Menschen mit Allergien
                            oder Atemwegserkrankungen. Auch das Risiko von Infektionen wird reduziert,
                            da sich Krankheitserreger auf sauberen Oberflächen nicht so leicht vermehren können.
                        </div>
                    </div>
                </div>



                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                            className={`accordion-button ${isOpen2 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded={isOpen2}
                            aria-controls="panelsStayOpen-collapseTwo"
                            onClick={toggleAccordion2}
                        >
                            Verlängerung der Lebensdauer von Oberflächen
                            <i className={`bi bi-caret-${isOpen2 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className={`accordion-collapse collapse ${isOpen2 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-collapseThree"
                    >
                        <div className="accordion-body">
                            Staub, Schmutz und andere Ablagerungen können dazu führen,
                            dass Oberflächen schneller verschleißen oder beschädigt werden.
                            Eine regelmäßige Reinigung kann dazu beitragen, dass Oberflächen
                            wie Fußböden, Möbel oder Arbeitsplatten länger halten und nicht
                            so schnell ersetzt werden müssen.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button
                            className={`accordion-button ${isOpen3 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded={isOpen3}
                            aria-controls="panelsStayOpen-collapseThree"
                            onClick={toggleAccordion3}
                        >
                            Ästhetischer Wert
                            <i className={`bi bi-caret-${isOpen3 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className={`accordion-collapse collapse ${isOpen3 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            Eine saubere Umgebung sieht einfach besser aus und
                            trägt wesentlich zum allgemeinen Wohlbefinden bei.
                            Es ist angenehmer, in einer sauberen Umgebung zu arbeiten
                            oder zu leben, als in einer Umgebung, die vernachlässigt wurde.
                            Eine regelmäßige Reinigung kann dazu beitragen, dass Ihr Zuhause
                            oder Ihr Unternehmen angenehmer und einladender wirkt.
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button
                            className={`accordion-button ${isOpen4 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded={isOpen4}
                            aria-controls="panelsStayOpen-collapseFour"
                            onClick={toggleAccordion4}
                        >
                            Reduzierung von Stress
                            <i className={`bi bi-caret-${isOpen4 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseFour"
                        className={`accordion-collapse collapse ${isOpen4 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingFour"
                    >
                        <div className="accordion-body">
                            Unordnung und Schmutz können zu Stress und Unwohlsein führen.
                            Eine regelmäßige Reinigung kann dazu beitragen, dass Sie sich in
                            Ihrer Umgebung wohler fühlen und den Stress reduzieren. Wenn Sie
                            sich in einer sauberen und organisierten Umgebung befinden, sind
                            Sie besser in der Lage, Ihre Arbeit zu erledigen oder sich zu entspannen.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button
                            className={`accordion-button ${isOpen5 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFive"
                            aria-expanded={isOpen5}
                            aria-controls="panelsStayOpen-collapseFour"
                            onClick={toggleAccordion5}
                        >
                            Einsparung von Zeit und Geld
                            <i className={`bi bi-caret-${isOpen5 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseFive"
                        className={`accordion-collapse collapse ${isOpen5 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingFive"
                    >
                        <div className="accordion-body">
                            Eine regelmäßige Reinigung kann dazu beitragen,
                            dass größere Reinigungsprojekte vermieden werden können.
                            Wenn Sie beispielsweise Ihren Teppich regelmäßig staubsaugen,
                            müssen Sie möglicherweise nicht so oft eine professionelle
                            Teppichreinigung durchführen lassen. Eine regelmäßige Reinigung
                            kann auch dazu beitragen, dass Sie Ihre Zeit und Ressourcen effektiver nutzen können.
                        </div>
                    </div>
                </div>








            </div>
        </div>

    )
}