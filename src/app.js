import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;