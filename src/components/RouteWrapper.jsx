
import Login from './Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProfilePage from './ProfilePage';

export default function RouteWrapper() {
    return (
        <Router>
                <Switch>
                    <Route path={`/profile/:token`} component={ProfilePage} />
                    <Route exact path='/'>
                        <Login />
                    </Route>
                </Switch>
        </Router>
    )
}