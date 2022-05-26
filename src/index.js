// Import Modules
import { render } from 'react-dom';
import { PureComponent } from 'react';

// Import Styles
import './style/reset.scss';
import './style/main.scss';

import App from './component/App.container';

class AppRouter extends PureComponent {
  render() {
      return (
        <App/>
      )
  }
}

render(<AppRouter />, document.getElementById('root'));
