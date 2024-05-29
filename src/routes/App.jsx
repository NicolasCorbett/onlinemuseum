import './App.css';
import hazes from '../assets/hazesFAXIMIL.png';
import cultuur from '../assets/CultuurFAXIMIL.png';
import jan from '../assets/JanFAXIMIL.png';
import drugs from '../assets/WaronDrugsFAXIMIL.png';
import night from '../assets/NighlifeFAXIMIL.png';

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
          For more context, please visit the <a href="/context">'context'</a> page. </p>
      </div>

      <div id='one' class="picnlink">

        <a href="/cultuur" className="kak"><div className="test"><a className="doclink" href="/cultuur">
          "RUIMTE VOOR CULTUUR!"  "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!" "RUIMTE VOOR CULTUUR!"
        </a></div><img id='cultuur' className='hazes' src={cultuur}></img></a>

      </div>

      <div id='three' class="picnlink">
        <a href="/night" className="kak">
          <div className="test">
            <a className="doclink" href="/night">
              "Protect our nightlife" <br /> "Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife" <br />"Protect our nightlife"
            </a>
          </div>
          <img id='night' className='hazes' src={night}></img></a>
      </div>


      <div id='four' class="picnlink">
        <a href="/drugs" className="kak">
          <div className="test">
            <a className="doclink" href="/drugs">
              "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)" "Decriminalising drugs (POR)"
            </a>
          </div>
          <img id='drugs' className='hazes' src={drugs}></img></a>
      </div>


      <div id='five' class="picnlink">
        <a href="/Hazes" className="kak">
          <div className="test">
            <a className="doclink" href="/hazes">
              "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine" "Ways to support Palestine"
            </a>
          </div>
          <img id='hazes' className='hazes' src={hazes}></img></a>

      </div>


      <div id='two' class="picnlink">
        <a href="/jan" className="kak">
          <div className="test">
            <a className="doclink" href="/jan">
              "The only way in typography!" "The only way in typography!" "The only way in typography!" "The only way in typography!" "The only way in typography!" "The only way in typography!" "The only way in typography!"
            </a>
          </div>
          <img id='jan' className='hazes' src={jan}></img></a>
      </div>


    </div>
  );
}

export default App;
