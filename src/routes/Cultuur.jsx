import React from 'react'
import Nav from '../components/Nav'
import cultuur from '../assets/CultuurFAXIMIL.png'
import '../routes/App.css'

const Cultuur = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '30px' }}>
                <img src={cultuur} style={{ width: '73vw' }} alt="" />
                <div className="textwrap" style={{ marginLeft: '50px' }}>
                    <h1 className='imbue-title-small' >PLAYBOY December 94'</h1>
                    <p> This interseting 2-color spread is a once quite erotic and now transformed "body & soul"-column.
                        Seemingly set text with little care for the pre-imposed colorblocks, narrow
                        three column structure with not an inch of space to spare.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Bebas Neu heavy capital sans-serif</span><br />
                                        This Fat-faced sans-serif, marks the page in big blocks, crammed into the little
                                        spaces the page corners have to offer.</li>
                                    <li><span className="titlespan">Rigatoni slab-serif</span><br />
                                        All other titles, big and small, are set in this high-contrast condensed slab-serif.</li>
                                    <li><span className="titlespan">FreighText Book serif</span><br />
                                        Body text set in a rich contrasted and quite heavy serif.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Duotone</span><br />

                                    </li>
                                    <li><span className="titlespan">3-column structure</span><br />

                                    </li>
                                    <li><span className="titlespan">3rd column with no margin on the visual carrier-plane</span><br />

                                    </li>
                                    <li><span className="titlespan">Image masking</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.defederatie.org/nieuws/ruimte-voor-cultuur-voor-een-toekomstgericht-partnerschap-met-de-vlaamse-overheid"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>

        </div>
    )
}

export default Cultuur