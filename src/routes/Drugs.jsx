import React from 'react'
import drugs from '../assets/WaronDrugsFAXIMIL.png';
import Nav from '../components/Nav'
import '../routes/App.css'

const Drugs = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '70px' }}>
                <img src={drugs} style={{ width: '75vw', height: '120vh', marginLeft: '-60px', marginTop: '-70px', maxHeight: '130vh' }} alt="" />
                <div className="textwrap" style={{ marginLeft: '50px' }}>
                    <h1 className='imbue-title-small' >Penthouse Letters 83'</h1>
                    <p> An exempt from once well-established magazine "Penthouse Letters" an explicit magazine most characterized by
                        it's pages long erotic stories and graphic pornography imagery.
                        An Amazing full page cut-out image and asymmetric serif text combination. Here
                        filled with recent, important, good news from Portugal. Featuring a full body
                        Richard Nixon, US War on drugs champion.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='drugdrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Baskerville serif</span><br />
                                        This curly- semi-heavy contrasted title champion has sharp serifs rounded in nicely.
                                        Used as main title.</li>
                                    <li><span className="titlespan">Minion serif</span><br />
                                        Low-contrast highly readible body-text font of regular weight.</li>
                                    <li><span className="titlespan">FreightText Black serif</span><br />
                                        Providing support to the body text with higher contrasts, rounder volumes and red color.</li>
                                    <li><span className="titlespan">Etica Sheriff Bold slab-serif</span><br />
                                        "Watch Vice".</li>
                                </ul>
                            </div>
                        </div>
                        <div id='drugdrop2' className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Asymmetric left outlining text</span><br />

                                    </li>
                                    <li><span className="titlespan">Liquid text-wrap</span><br />

                                    </li>
                                    <li><span className="titlespan">Image masking</span><br />

                                    </li>
                                    <li><span className="titlespan">Collect-as-poster spread</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.vice.com/en/article/g5pebq/why-portugal-decriminalised-all-drugs"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>
        </div>
    )
}

export default Drugs