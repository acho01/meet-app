import {Route, Switch} from 'react-router-dom'
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact >
                    <AllMeetups/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetup/>
                </Route>
                <Route path='/favourites'>
                    <Favourites/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
