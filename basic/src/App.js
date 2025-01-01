import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Base, BaseSample } from './custom_components/basiccomp';
import Parent from './custom_components/parentcomp';
import NameParent from './custom_components/nameDisplayParent';
import { Details } from './custom_components/propsBasic';
import { UProfile } from './custom_components/userProfile';
import { Propsamp } from './custom_components/propTypessamp';
import { Compparent } from './custom_components/compoenentparent';
import { Countercomp } from './custom_components/counter';
import { ParentState } from './custom_components/stateParentChild';
import { Header } from './custom_components/headercomp';
import { GreetParent } from './custom_components/greetParent';
import { Namelist } from './custom_components/namelist';
import { SampleForm } from './custom_components/form';
const elem = {
  name: 'John Does',
  age: 18
};
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Base />
              <BaseSample />
              <Parent />
              <NameParent />
              <Details name={elem.name} age={elem.age} />
              <UProfile picture="../assets/ASSYST-NVTC-TECH100_Banner_image_.jpg" name="Neena" />
              <Propsamp name="srilakshmi" age={23} children={3} />
              <Compparent />
              <Countercomp />
              <GreetParent />
              <Namelist />
            </>
          } />
        </Routes>
        <Routes>
          <Route path="/click-counter" element={<ParentState />} />
        </Routes>
        <Routes>
          <Route path='/details' element={<SampleForm />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
