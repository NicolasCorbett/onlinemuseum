import React from 'react'
import night from '../assets/NighlifeFAXIMIL.png';
import Nav from '../components/Nav'
import '../routes/App.css'

const Night = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '70px' }}>
                <img src={night} style={{ width: '73vw', height: '110vh' }} alt="" />
                <div className="textwrap" style={{ marginLeft: '50px' }}>
                    <h1 className='imbue-title-small' >Paris Las Vegas International 1980</h1>
                    <p> A surprisingly bright and refreshing feature in the archive. Including a once very popular and
                        oh-so satisfying soft-serif typeface. The original spread was a collection of pornographic images
                        and personal sex-life stories of various interviewees.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='nightdrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Fields soft-serif</span><br />
                                        Defining to the entire spread, this article is written in a soft-serif from title to body-text.
                                        The typeface provides letters with a tilted contrast and beautifuly rounded serifs.</li>
                                    <li><span className="titlespan">Etica Sheriff Heavy slab-serif</span><br />
                                        Very fat slabbed serif in all capitals used as article titles.</li>
                                </ul>
                            </div>
                        </div>
                        <div id='nightdrop2' className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Interesting text-break-ups, using a single line break
                                        in combination with text-indentation instead of two line breaks.</span><br />

                                    </li>
                                    <li><span className="titlespan">3-column structure</span><br />

                                    </li>
                                    <li><span className="titlespan">Large imagery</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.centreforcities.org/blog/rise-urban-living-threatening-nightlife-cities-heres-protect/"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>
        </div>
    )
}

export default Night