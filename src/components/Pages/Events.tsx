import * as React from 'react';

import Page from '../Page/Page';
import { Event } from '../Event/Event';
import { IEvent } from '../Event/Event.d';

import * as DB from './events.json';

// Options
const events: IEvent[] = DB.events;

export default function EventPage() {
    return <Page title='Лента событий'>
        <div className='events'>
            { events && events.map((obj: IEvent, i: number) => <Event key={i} obj={obj} />) }
        </div>
    </Page>;
}
