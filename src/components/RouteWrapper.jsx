
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProfilePage from './ProfilePage';
import Login from './Login'

export default function RouteWrapper() {
    return (
        <Router>
            <Switch>
                <Route path='/profile'>
                    <ProfilePage />
                </Route>
                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}