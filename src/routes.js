import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './common/list/list';
import Profile from './profile/profile';
import Albums from './albums/albums';

class Routes extends Component {
    render(){
        return(
                <Switch>
                    <Route path="/" exact component={List}/>
                    <Route path="/profile/:id" exact component={Profile}/>
                    <Route path="/albums/:id" exact component={Albums}/>
                </Switch>
           
        )
    }
}

export default Routes; 