// Import Modules
import { render } from 'react-dom';
import { PureComponent } from 'react';

import App from './App.container';

class AppRouter extends PureComponent {
  render() {
      return (
        <App/>
      )
  }
}

render(<AppRouter />, document.getElementById('root'));
