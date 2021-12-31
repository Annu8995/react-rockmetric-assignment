import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import userReducer from './reducers/userReducer';
import DashboardPage from './components/DashboardPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = createStore(
    combineReducers({
        user: userReducer        
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const AppRouter = () => (
    <BrowserRouter>
        <div>            
            <Routes>                
                <Route path="/" element={<DashboardPage />}/>                
            </Routes>            
        </div>                
    </BrowserRouter>
)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

