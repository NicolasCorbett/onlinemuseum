import React from 'react'
import calli from '../assets/calliFAXIMIL.png'
import Nav from '../components/Nav'
import '../routes/App.css'

const Calligraph = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '30px' }}>
                <img src={calli} style={{ width: '73vw', height: '114vh' }} alt="" />
                <div className="textwrap" style={{ marginLeft: '50px' }}>
                    <h1 className='imbue-title-small' >PLAYBOY December 94'</h1>
                    <p> Exempt from an interview with oceansurfer Elgersma Rinse from the show "Kamikaze". The interesting
                        title structure and almost absurd letterspacing in this very blocked publication almost remind in a way
                        of works made by the New Typographers.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='callidrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Arial variable weight sans-serif</span><br />
                                        Forms the centered eye-catch title, shortly describing the subject. Introduction
                                        in quite large pt. size and bold for emphasis. Usage for interview questions in bold.</li>
                                    <li><span className="titlespan">FreighText Medium serif</span><br />
                                        Body text set in a medium serif.</li>
                                </ul>
                            </div>
                        </div>
                        <div id='callidrop2' className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">centered main title.</span><br />

                                    </li>
                                    <li><span className="titlespan">Fully justified introduction with wide letterspacing
                                        thin sans-serif with black weights for highlighting. Squeezed in between title lines.</span><br />

                                    </li>
                                    <li><span className="titlespan">serif body-text and sans-serif questions.</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.printmag.com/design-books/margaret-shepherd-learning-american-calligraphy/"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>

        </div>
    )
}

export default Calligraph