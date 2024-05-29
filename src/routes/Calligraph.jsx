import React from 'react'
import calli from '../assets/calliFAXIMIL.png'
import Nav from '../components/Nav'
import '../routes/App.css'

const Calligraph = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '30px' }}>
                <img src={calli} style={{ width: '73vw' }} alt="" />
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
                                    <li><span className="titlespan">Arial variable weight sans-serif</span><br />
                                        This Fat-faced sans-serif, marks the page in big blocks, crammed into the little
                                        spaces the page corners have to offer.</li>
                                    <li><span className="titlespan"></span><br />
                                        All other titles, big and small, are set in this high-contrast condensed slab-serif.</li>
                                    <li><span className="titlespan">FreighText Medium serif</span><br />
                                        Body text set in a rich contrasted and quite heavy serif.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown">
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