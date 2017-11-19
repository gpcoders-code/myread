import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * @Description: Custom Components
 */
import Header from './shared/Header';
import Footer from './shared/Footer';


import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import Read from './components/Read';
import Search from './components/Search';
import BookDetails from './components/BookDetails'


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Switch>
                        <Route path="/" component={CurrentlyReading} exact={true} />
                        <Route path="/currently-reading" component={CurrentlyReading} />
                        <Route path="/wanted-to-read" component={WantToRead} />
                        <Route path="/read" component={Read} />
                        <Route path="/search" component={Search} />
                        <Route path="/book/:id" component={BookDetails} />
                    </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes;