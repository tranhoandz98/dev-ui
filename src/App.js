import React,{useEffect} from 'react'
import AppRouter from './router/AppRouter';
import WrapLayout from './components/layout/layout';
import { useKeycloak } from '@react-keycloak/web';
import EmptyPage from 'components/EmptyPage';
import { useQuery, useQueryClient } from 'react-query';
import userApi from 'api/userApi';
import useStore from 'app/store';

const App = () => {


    const { keycloak } = useKeycloak()

    const { data: dataUserCrApi, isFetching } = useQuery(
        ["user-cr", keycloak?.token],
        async () => await userApi.getUserInfo(),
        {
            enabled: !!keycloak?.authenticated,
        }
    );
    const setAuthData = useStore(state => state.setAuthData)

    const genDataUi = () => {
        try {
            if (dataUserCrApi) {
                const { status, message } = dataUserCrApi;
                if (status === 2) {
                    // showAlert('error', intl.formatMessage({ id: "FAIL" }), message);
                    return;
                }
                if (status === 1) {
                    setAuthData(dataUserCrApi);
                }
            }
        } catch (error) {
            console.error('error: ', error);
        }
    }
    useEffect(() => {
        genDataUi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUserCrApi, isFetching])

    const queryClient = useQueryClient();

    useEffect(() => {
        keycloak.onAuthLogout = async function (e) {
            keycloak.login();
        }
        keycloak.onTokenExpired = async function (e) {
            keycloak.login();
        }

        keycloak.onAuthSuccess = async function (e) {
            queryClient.invalidateQueries(["user-cr"]);
        }
        // eslint-disable-next-line
    }, [keycloak]);



    const { initialized } = useKeycloak();

    if (!initialized) {
        return <EmptyPage />
    }

    return (
        <div className='App  bg-white text-slate-700 dark:text-slate-400 dark:bg-slate-900'>
            <WrapLayout>
                <AppRouter />
            </WrapLayout>

        </div>
    )
}

export default App
