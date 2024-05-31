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
                    <p> Originally a quite lack-luster sensational column about Newton Helmut and a scandal
                        affair of his in Berlin. Transformed here to match a real scandal (the warcriminal not the conviction).
                        Matching the shouting lay-out and typography of the original.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='icjdrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Impact heavy sans-serif</span><br />
                                        Main use for titles in varying densities, also playing with the capital height in some cases.</li>
                                    <li><span className="titlespan">Forma DJR Thin sans serif</span><br />
                                        Creates the loud but somewhat breathing naming of the article subject. Some
                                        play with the name containing a part of the full name. Also used for the larger left column
                                        of text containing the introduction.</li>
                                    <li><span className="titlespan">Freight Text Compressed serif</span><br />
                                        Body text set in a quite condensed serif font.</li>
                                </ul>
                            </div>
                        </div>
                        <div id='icjdrop2' className="dropdown">
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