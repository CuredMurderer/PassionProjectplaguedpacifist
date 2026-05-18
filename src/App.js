import rantinggif from './imgfiles/rantingbtngif.gif'
import headergif from './imgfiles/header.gif'
import artgif from './imgfiles/artgif.gif'
import writinggif from './imgfiles/writinggif.gif'
import websitesgif from './imgfiles/websitegif.gif'
import socialsgif from './imgfiles/socialsgif.gif'
import guestbookgif from './imgfiles/guestbookgif.gif'

import forgetmenot1 from './imgfiles/forgetmenot1.png'
import forgetmenot2 from './imgfiles/forgetmenot2.png'
import gardenias from './imgfiles/gardenia1.png'
import petunias from './imgfiles/petunia1.png'

import Wave from 'react-wavify'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Art from './p2Art'
import Writing from './Writing'
import Websites from './Websites'
import Ranting from './Ranting'
import Socials from './Socials'
import Guestbook from './Guestbook'


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/Home" element={<Home />}/>
  <Route path="/Art" element={<Art />}/>
  <Route path="/Writing" element={<Writing />}/>
  <Route path="/Ranting" element={<Ranting />}/>
  <Route path="/Websites" element={<Websites />}/>
  <Route path="/Socials" element={<Socials />}/>
  <Route path="/Guestbook" element={<Guestbook />}/>
</Routes>
</BrowserRouter>

</>

  );
}

export default App;
