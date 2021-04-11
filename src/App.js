import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css'
import store from "./store";
 
import { Homepage, EventPage, ProfilePage, EventDetail , UserRegistration,EventsNearMe, UserLogin, StartScreen } from "./modules";
// import { Homepage, EventPage, ProfilePage, EventDetail , UserRegistration, UserLogin} from "./modules";
  import { Layout } from "./commons";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        component={StartScreen}
                    />
                    <Route
                        path="/login"
                        component={UserLogin}
                    />
                    <Route
                        path="/register"
                        component={UserRegistration}
                    />
                    <Route
                        path="/(.+)"
                        render={() => {
                            return (
                                
                                <Layout>
                                    <Switch>
                                      
                                        <Route
                                            exact
                                            path="/home"
                                            component={Homepage}
                                        />
                                        <Route
                                            path={['/createEvent' , '/updateEvent']}
                                            component={EventPage}
                                        />
                                        <Route
                                            path="/profile"
                                            component={ProfilePage}
                                        />
                                        <Route
                                            path="/event/:id"
                                            component={EventDetail}
                                        />
                                    
                                    
                                        <Route
                                            path="/nearBy"
                                            component={EventsNearMe}
                                        />
                                    </Switch>
                                </Layout>)
                        }}
                    >
                    </Route>
                </Switch>
                 
            </Router>
        </Provider>
    );
}

export default App;
