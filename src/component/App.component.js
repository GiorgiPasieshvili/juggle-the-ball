import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './App.style.scss';

/** @namespace Component/App/Component */
export class App extends PureComponent {
    static propTypes = {
        score: PropTypes.number.isRequired,
        bestScore: PropTypes.number.isRequired,
        onBallClick: PropTypes.func.isRequired
    }

    render() {
        const { score, bestScore, onBallClick } = this.props;

        return (
            <div className='App'>
                <div className='App-Stats'>
                    <span>Score: { score }</span>
                    <span>Best: { bestScore }</span>
                </div>
                <div
                    className='App-Ball'
                    onClick={ () => onBallClick() }
                >
                </div>
            </div>
        );
    }
}

export default App;
