import { Switch, Route } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import SpecialOffers from "../../components/SpecialOffers";

const Home = () => {
    let match = useRouteMatch();
    return (
        <>
            <Header />
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/demo">
                    <h1>Yoohoo Demo!</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/register">
                    <h1>Register</h1>
                </Route>
                <Route path="/products" exact>
                    <h1>Products List</h1>
                </Route>
                <Route path={match.path}>
                    <SpecialOffers/>
                </Route>
            </Switch>
        </>
    );
}

export default Home;