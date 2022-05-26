import { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import './App.style.scss';

/** @namespace Component/App/Component */
export class App extends PureComponent {
    static propTypes = {
    }

    render() {
        return (
            <div className='App'>
                <h1>Juggling the ball</h1>
            </div>
        );
    }
}

export default App;
