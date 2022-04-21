import { lazy } from "react";
import EmptyPage from "components/EmptyPage";
import { routerMain } from 'constants/routerMain';

const Home = lazy(() => import('pages/home/Home'));
const Support = lazy(() => import('pages/support/Support'));
const ProjectDetail = lazy(() => import('pages/project-detail/ProjectDetail'));
const ApiDetail = lazy(() => import('pages/api-detail/ApiDetail'));
const Page404 = lazy(() => import('pages/errors/Page404'));
const Page500 = lazy(() => import('pages/errors/Page500'));
const Page403 = lazy(() => import('pages/errors/Page403'));


const Routes = [
    {
        path: routerMain.NONE,
        exact: true,
        component: Home,
    },
    {
        path: routerMain.SUPPORT,
        exact: true,
        component: Support,
    },
    {
        path: routerMain.PROJECT,
        exact: true,
        component: ProjectDetail,
    },
    {
        path: `${routerMain.PROJECT}/:uuid`,
        exact: true,
        component: ProjectDetail,
    },
    {
        path: `${routerMain.PROJECT}/:uuid/:uuidApi`,
        exact: true,
        component: ApiDetail,
    },
    {
        path: routerMain.EMPTY,
        exact: true,
        component: EmptyPage,
    },
    //page error
    {
        path: routerMain.PAGE_403,
        exact: true,
        component: Page403,
    },
    {
        path: routerMain.PAGE_500,
        exact: true,
        component: Page500,
    },
    {
        path: '*',
        exact: true,
        component: Page404,
    },
];

export { Routes };
