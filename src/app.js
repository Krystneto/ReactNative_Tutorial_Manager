import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCJcAddC1mQBaNlt9Pljr6KbeyigEal_qg',
            authDomain: 'manager-924ab.firebaseapp.com',
            databaseURL: 'https://manager-924ab.firebaseio.com',
            projectId: 'manager-924ab',
            storageBucket: 'manager-924ab.appspot.com',
            messagingSenderId: '134526360723'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
               <Router />
            </Provider>
        );
    }
}

export default App;
