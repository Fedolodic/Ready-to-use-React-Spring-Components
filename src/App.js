import React, {Component} from 'react';
import Slideshow from "./components/Slideshow";
import MasonryGrid from "./components/MasonryGrid";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Slideshow/>*/}
                <MasonryGrid/>
            </React.Fragment>
        )
    }
}

export default App;