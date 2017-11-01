import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from '@/shared/App';

function renderer(Component) {
    return hydrate(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    );
}

renderer(App);

if (module.hot) {
    module.hot.accept('@/shared/App', () => renderer(App));
}
