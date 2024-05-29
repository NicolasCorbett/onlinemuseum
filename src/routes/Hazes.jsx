import React from 'react'
import Nav from '../components/Nav'
import hazes from '../assets/hazesFAXIMIL.png'
import '../routes/App.css'

const Hazes = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper">
                <img src={hazes} style={{ width: '75vw' }} alt="" />
                <div className="textwrap">
                    <h1 className='imbue-title-small' >PLAYBOY December 94'</h1>
                    <p> In this 94' issue of Playboy an interview with dutch singer and star "Andre Hazes" was
                        featured. The interview ofcourse containing mostly unrelevant, sensational questions. So we say: "Free palestine!".
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Forma DJR extra-bold/Light sans-serif</span><br />
                                        The sans-serif with sepcifically round a's stands in combination with the serif body-text. It's use; clear bulletpoints and seemingly for larger more important text fragments.</li>
                                    <li><span className="titlespan">FreightText Bold Italic Serif</span><br />
                                        The article's body text is completely written in italics, with a strong weight.</li>
                                    <li><span className="titlespan">Myriad condensed capital sans-serif</span><br />
                                        Used for page heading and source indiciation, universal usage over all articles in this issue.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Strong 3-column structure in text and image.</span><br />

                                    </li>
                                    <li><span className="titlespan">Asymmetric title through structure. Causing indenting.</span><br />

                                    </li>
                                    <li><span className="titlespan">Liquid text-wrap.</span><br />

                                    </li>
                                    <li><span className="titlespan">Collage elements.</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://afsc.org/news/6-ways-you-can-support-palestinians-gaza"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>

        </div>
    )
}

export default Hazes