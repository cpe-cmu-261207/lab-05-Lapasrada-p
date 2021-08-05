import HeaderSec from './components/HeaderSec';
import Todolist from './components/Todolist';
import FooterSec from './components/FooterSec';

function App() {

  

  return (
    <div>
      {/* header section */}
      <HeaderSec/>

      {/* todo section */}
      <Todolist/>
      
      {/* footer section */}
      <FooterSec/>
    </div>
  );
}

export default App;
