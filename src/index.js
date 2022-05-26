// Import Modules
import { createRoot } from 'react-dom/client';
import { PureComponent } from 'react';

// Import Styles
import './style/reset.scss';
import './style/main.scss';

import App from './component/App.container';

class AppRouter extends PureComponent {
  render() {
      return (
        <>
          <p>Click ball to start juggle</p>
          <App/>
        </>
      )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<AppRouter/>);
