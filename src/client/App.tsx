import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Page as PageCommon } from '../components/Page/index';

import routes from './routes';

export default function App(props?: { title?: string, platform?: 'desktop' | 'mobile' }) {
    const platform = props.platform || 'desktop';
    const Page = PageCommon[platform]();

    return <Page title={ props.title || 'Yandex house' }>
        <Switch>
            { routes.map((route, i) => <Route key={i} platform={platform} {...route} /> ) }
        </Switch>
    </Page>
}
