import { BrowserRouter } from "react-router-dom";

import { About, Apply, Experience, Feedbacks, Hero, Navbar, Security, Data, Development, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Security />
        <Data />
        <Development />
        <Feedbacks />
        <div className='relative z-0'>
          <Apply />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;