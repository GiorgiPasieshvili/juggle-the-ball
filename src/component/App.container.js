import { PureComponent } from 'react';

import App from './App.component';

const BALL_X = '--ballX';
const BALL_Y = '--ballY';
const CONT_WIDTH = '--contWidth';
const CONT_HEIGHT = '--contHeight';

/** @namespace Component/App/Container */
export class AppContainer extends PureComponent {

    state = {
        score: 0,
        bestScore: 0,
        intervalId: 0,
        delay: 1,
        isGameOn: false
    };

    containerFunctions = {
        onBallClick: this.onBallClick.bind(this)
    };

    containerProps() {
        const { score, bestScore } = this.state;

        return { score, bestScore };
    }

    onBallClick() {
        const { delay, isGameOn } = this.state;

        const ballXPos = this._getAppStyleProperty(BALL_X);
        const ballYPos = this._getAppStyleProperty(BALL_Y);
        const contWidth = this._getAppStyleProperty(CONT_WIDTH);
        const contHeight = this._getAppStyleProperty(CONT_HEIGHT);

        console.log(ballXPos, ballYPos, contWidth, contHeight);

        if (!isGameOn) {
            const newIntervalId = setInterval(() => this._gamePlay(), delay);
            this.setState({ intervalId: newIntervalId, isGameOn: true });  
        }
    }

    _gamePlay() {
        // const { intervalId } = this.state;
        console.log('Game on!')
        const ballYPos = this._getAppStyleProperty(BALL_Y);

        this._setAppStyleProperty(BALL_Y, `${ballYPos + 1}px`)

        if (ballYPos > 400) {
            this._setAppStyleProperty(BALL_Y, `250px`)
        }


        // if (intervalId) {
        //     clearInterval(intervalId);
        //     this.setState({ intervalId: 0 });
        //     return;
        // }
    }

    _setAppStyleProperty(variable, value) {
        document.querySelector('.App').style.setProperty(variable, value);
    }

    _getAppStyleProperty(variable) {
        return parseFloat(getComputedStyle(document.querySelector('.App')).getPropertyValue(variable));
    }

    render() {
        return (
            <App 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default AppContainer;