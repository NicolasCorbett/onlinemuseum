import React from 'react'
import Nav from '../components/Nav'
import bos from '../assets/bosFAXIMIL.png'
import '../routes/App.css'
import { motion } from "framer-motion"

const Bos = () => {
    return (
        <div>
            <Nav />
            <div className="wrapper" style={{ marginBottom: '30px' }}>
                <motion.img src={bos} style={{ width: '50vw', marginTop: '-50px' }} alt=""
                    initial={{
                        opacity: 0,
                        y: 400
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 1 }}
                />
                <div className="textwrap" style={{ marginLeft: '50px' }}>
                    <h1 className='imbue-title-small' >PLAYBOY May 78'</h1>
                    <p> This hardcore, slave-sex advert for a club in Charleroi with very graphic, halftone
                        and masked images paired with a multitude of display fonts such as stencil, brush, etc.
                        Now repurposed as an advert for a local place in Antwerp that matters. An initiative by
                        'Het Bos' Antwerp called Boslabs.
                    </p>
                    <div className="infowrap">
                        <hr />
                        <div id='bosdrop' className="dropdown">
                            <h2>Fonts in use:(approximate)</h2>
                            <div id='bosdrop' className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">Stencil Std</span><br />
                                        This font, as the name suggests, is a fat-faced rounded stencil font, with serifs.
                                        Used here for almost all large type.</li>
                                    <li><span className="titlespan">Arial sans serif</span><br />
                                        Supporting the large type, all-caps, sans-serif with varying widths.</li>
                                    <li><span className="titlespan">Brush script std</span><br />
                                        an interesting use of a free-hand, brushscript.</li>
                                    <li><span className="titlespan">Freight Text Semibold Italic serif</span><br />
                                        Body text with large leading and free-length lines.</li>
                                    <li><span className="titlespan">Tiffany Demi std serif</span><br />
                                        Another font pairing in this font-rich composition, a capital sharp serif.</li>
                                </ul>
                            </div>
                        </div>
                        <div id='bosdrop2' className="dropdown">
                            <h2>Compositional properties:</h2>
                            <div className="FontDropdown">
                                <ul>
                                    <li><span className="titlespan">illustration</span><br />

                                    </li>
                                    <li><span className="titlespan">masked imagery</span><br />

                                    </li>
                                    <li><span className="titlespan">hyper-font-pairing</span><br />

                                    </li>
                                    <li><span className="titlespan">monotone color</span><br />

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='normalLink' href="https://www.hetbos.be/boslabs"> Read the webarticle here.</a>
                    <a className='normalLink' href="/original">"What about the original?"</a>
                </div>
            </div>

        </div>
    )
}

export default Bos