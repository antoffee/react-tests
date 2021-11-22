import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Boxes } from 'containers/Boxes';

import { FullScreenWrapper } from 'components/FullScreenWrapper';

export const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">HomePage</Link>
                        </li>
                        <li>
                            <Link to="/boxes">Boxes example</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/boxes">
                        <FullScreenWrapper>
                            <Boxes />
                        </FullScreenWrapper>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
