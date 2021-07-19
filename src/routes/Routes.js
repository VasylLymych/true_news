import React from "react";
import {Route, Switch} from 'react-router-dom';
import UkraineNewsContainer from "../components/UkraineNews/UkraineNews.container";
import WorldNewsContainer from "../components/worldNews/WorldNews.container";
import AddNewsItem from "../components/addNewsItem/AddNewsItem";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/UkraineNews" render={() => <UkraineNewsContainer/>}/>
            <Route exact path="/worldNews" render={() => <WorldNewsContainer/>}/>
            <Route exact path="/addNewsItem" render={() => <AddNewsItem/>}/>
            <Route exact path="/:articleId" render={() => <div>asgsagsasagsag</div>}/>
        </Switch>
    )
}

export default Routes