import { Provider } from 'react-redux';
import store from './redux/store.js';
import ButtonRedux from './components/ButtonRedux';
import Text from './components/Text';

function ReduxApp() { 
    return (
        <Provider store={store}>
            <ButtonRedux />
            <Text />
        </Provider>
    )
}

export default ReduxApp;