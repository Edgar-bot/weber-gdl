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
                            Eine regelmäßige Reinigung hilft dabei, die Ausbreitung von Bakterien, Viren und Allergenen zu reduzieren. Dies kann dazu beitragen, dass die Luftqualität verbessert wird, insbesondere für Menschen mit Allergien oder Atemwegserkrankungen. Auch das Risiko von Infektionen wird reduziert, da sich Krankheitserreger auf sauberen Oberflächen nicht so leicht vermehren können.
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
                            Accordion Item #2
                            <i className={`bi bi-caret-${isOpen2 ? "up" : "down"}`} />
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className={`accordion-collapse collapse ${isOpen2 ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}