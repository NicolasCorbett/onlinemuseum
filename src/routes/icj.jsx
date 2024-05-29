import React from 'react'
import Nav from '../components/Nav'
import icj from '../assets/icjFAXIMIL.png'
import '../routes/App.css'

const Icj = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '30px' }}>
                <img src={icj} style={{ width: '60vw', marginTop: '-120px' }} alt="" />
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
                                    <li><span className="titlespan">Impact heavy sans-serif</span><br />
                                        This Fat-faced sans-serif, marks the page in big blocks, crammed into the little
                                        spaces the page corners have to offer.</li>
                                    <li><span className="titlespan">Forma DJR Thin sans serif</span><br />
                                        All other titles, big and small, are set in this high-contrast condensed slab-serif.</li>
                                    <li><span className="titlespan">Freight Text Compressed serif</span><br />
                                        Body text set in a rich contrasted and quite heavy serif.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Black & red</span><br />

                                    </li>
                                    <li><span className="titlespan">remarkable, 1 left outlined larger text column
                                        strangely short lines.</span><br />

                                    </li>
                                    <li><span className="titlespan">monotone black image</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.aljazeera.com/news/2024/5/24/icj-orders-israel-to-halt-its-offensive-on-rafah-gaza-in-new-ruling"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>

        </div>
    )
}

export default Icj