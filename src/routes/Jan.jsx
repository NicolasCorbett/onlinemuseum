import React from 'react'
import jan from '../assets/JanFAXIMIL.png';
import Nav from '../components/Nav'
import '../routes/App.css'

const Jan = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '70px' }}>
                <img src={jan} style={{ width: '73vw', marginLeft: '0px' }} alt="" />
                <div className="textwrap" style={{ marginLeft: '-450px', width: '300px' }}>
                    <h1 className='imbue-title-small' >PLAYBOY December 94'</h1>
                    <p> From a luxury car advert based on a sexist remark to one of the greats of modern typography.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='jandrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Tiffany Demi Italic serif</span><br />
                                        Used for larger text-usage, here; title & quote. </li>
                                    <li><span className="titlespan">Forma Bold sans-serif</span><br />
                                        Used for the super high-lead body text.</li>
                                </ul>
                            </div>
                        </div>
                        <div id='jandrop2' className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Asymmetric composition</span><br />

                                    </li>
                                    <li><span className="titlespan">Crossing text</span><br />

                                    </li>
                                    <li><span className="titlespan">Free-form title with first-line indent</span><br />

                                    </li>
                                    <li><span className="titlespan">high-lead body-text, justified</span><br />

                                    </li>
                                    <li><span className="titlespan">text-wrapping loose image</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www-design-01.andrew.cmu.edu/sites/default/files/book_rnd_6.pdf"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>
        </div>
    )
}

export default Jan