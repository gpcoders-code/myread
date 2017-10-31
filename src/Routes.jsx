import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * @Description: Custom Components
 */
import Header from './shared/Header';
import Footer from './shared/Footer';

import Home from './components/Home';
import CurrentlyReading from './components/CurrentlyReading';
import WantToRead from './components/WantToRead';
import Read from './components/Read';
import Search from './components/Search';
import Contact from './components/Contact';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/currently-reading" component={CurrentlyReading} />
                        <Route path="/wanted-to-read" component={WantToRead} />
                        <Route path="/read" component={Read} />
                        <Route path="/search" component={Search} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes;