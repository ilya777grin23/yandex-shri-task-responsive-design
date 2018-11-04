import { Page as PageCommon } from '../Page';

import './Page@mobile.sss';

import { Registry, withRegistry } from '@bem-react/di';

import { Header } from '../../Header/mobile/Header@mobile';
import { Content } from '../../Content/Content';
import '../../Content/Content@mobile.sss';
import { Footer } from '../../Footer/mobile/Footer@mobile';

const PageRegistry = new Registry({ id: 'Page' });

PageRegistry.set('Footer', Footer);
PageRegistry.set('Content', Content)
PageRegistry.set('Header', Header);

export const Page = withRegistry(PageRegistry)(PageCommon);
