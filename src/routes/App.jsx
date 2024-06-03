import './App.css';
import hazes from '../assets/hazesFAXIMIL.png';
import cultuur from '../assets/CultuurFAXIMIL.png';
import jan from '../assets/JanFAXIMIL.png';
import drugs from '../assets/WaronDrugsFAXIMIL.png';
import night from '../assets/NighlifeFAXIMIL.png';
import calli from '../assets/calliFAXIMIL.png';
import icj from '../assets/icjFAXIMIL.png';
import bos from '../assets/bosFAXIMIL.png';
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      {/* <nav className="nav-container">
        <a href="#">Zum gestalt un zurück</a>
        <a href="/context">Context</a>
        <a id="noLink">Maintained by - Nicolas Corbett</a>
      </nav> */}
      <div className="context-container">
        <h1 className='imbue-title'>Zum gestalt und zurück.</h1>
        <p className='textt' > Presented in this archive are a series of vintage articles collected mainly for their
          media-specific design aspects but also for some, their design qualities. This archive takes a
          dive into the medium of popular-media magazines, which knew a sudden and steady rise
          from the early sixties and onward. There one twist however. Not
          a single dot, pixel or stripe of content found in this space is an original. This archive of
          vintage once "faux" magazines have been reduced to their pure design-forms, after which they
          were given a new, contemporary and one might hope relevant interpretation. <br /><br />
          For more context, please visit the <a id='contextref' href="/context">'context'</a> page. </p>
      </div>

      <div id='one' class="picnlink">

        <a href="/cultuur" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 2, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/cultuur">
                "RUIMTE VOOR CULTUUR!"
              </a>
            </motion.div>
          </div>
          <motion.img id='cultuur' className='hazes' src={cultuur}
            initial={{
              opacity: 0,
              x: 400
            }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          />
        </a>

      </div>

      <div id='three' class="picnlink">
        <a href="/night" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/night">
                "Protecting our nightlife"
              </a>
            </motion.div>
          </div>
          <motion.img id='night' className='hazes' src={night}
            // initial={{
            //   opacity: 0,
            //   x: -400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          /></a>
      </div>


      <div id='four' class="picnlink">
        <a href="/drugs" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/drugs">
                "Decriminalising drugs (POR)"
              </a>
            </motion.div>
          </div>
          <motion.img id='drugs' className='hazes' src={drugs}
            // initial={{
            //   opacity: 0,
            //   x: 400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ delay: 0, ease: "easeOut", duration: 1 }}
          /></a>
      </div>


      <div id='five' class="picnlink">
        <a href="/Hazes" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/hazes">
                "Ways to support Palestine"
              </a>
            </motion.div>
          </div>
          <motion.img id='hazes' className='hazes' src={hazes}
            // initial={{
            //   opacity: 0,
            //   x: 0,
            //   y: 400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          /></a>

      </div>


      <div id='two' class="picnlink">
        <a href="/jan" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 3, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/jan">
                "The only way in typography!"
              </a>
            </motion.div>
          </div>
          <motion.img id='jan' className='hazes' src={jan}
            initial={{
              opacity: 0,
              x: -400
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{ delay: 1, ease: "easeOut", duration: 1 }}
            whileHover={{ opacity: 0, delay: 0, duration: 0.3 }}
            viewport={{ once: true }}

          /></a>
      </div>

      <div id='six' class="picnlink">
        <a href="/calligraphy" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/calligraphy">
                "Margaret Shepherd won't let calligraphy die."
              </a>
            </motion.div>
          </div>
          <motion.img id='calli' className='hazes' src={calli}
            // initial={{
            //   opacity: 0,
            //   x: 400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          /></a>
      </div>

      <div id='seven' class="picnlink">
        <a href="/icj" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/icj">
                "Netanyahu found guilty"
              </a>
            </motion.div>
          </div>
          <motion.img id='icj' className='hazes' src={icj}
            // initial={{
            //   opacity: 0,
            //   y: 400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              y: -100
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          /></a>
      </div>

      <div id='eight' class="picnlink">
        <a href="/bos" className="kak">
          <div className="test">
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease: "easeOut", duration: 0 }}
            >
              <a className="doclink" href="/bos">
                "BOSLABS"
              </a>
            </motion.div>
          </div>
          <motion.img id='bos' className='hazes' src={bos}
            // initial={{
            //   opacity: 0,
            //   x: 400
            // }}
            whileHover={{ opacity: 0, delay: 0 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
          /></a>
      </div>


    </div>
  );
}

export default App;
