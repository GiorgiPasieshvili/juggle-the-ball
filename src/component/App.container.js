import { PureComponent } from 'react';

import App from './App.component';

/** @namespace Component/App/Container */
export class AppContainer extends PureComponent {

    state = {
    };

    containerFunctions = {
    };

    containerProps() {
        // const { } = this.state;

        return {
        };
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