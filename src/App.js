import "the-new-css-reset/css/reset.css"
import './App.css';

import Cover from './component/Cover';
import Jargon from "./component/Jargon";


function App() {
    return (
        <div className="App">
            <Jargon />
            <Cover />
        </div>
    );
}

export default App;
