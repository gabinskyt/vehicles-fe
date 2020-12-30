import { Navigation } from 'components/Navigation';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ViewsConfig } from 'utils/config/views.config';

const App: React.FC = () => {

    return (
        <HashRouter>
            <Navigation views={ViewsConfig} />
            <Switch>
                {ViewsConfig.map((view, index) => (
                    <Route
                        key={`app-route-${index}`}
                        path={view.path}
                        component={view.component}
                    />
                ))}
            </Switch>
        </HashRouter>
    );
};

export default App;
