import Keycloak from 'keycloak-js'
// const keycloakConfig = {
//     // url: 'https://stg.accounts.cyberid.vn/auth',
//     url: 'http://10.30.1.40:8080/auth/',
//     realm: 'cyberid',
//     clientId: 'cyberdev',
// }
const BASE_URL_KC = process.env.REACT_APP_KC_URL;
const REAL_KC = process.env.REACT_APP_KC_REALM;
const CLIENT_ID_KC = process.env.REACT_APP_KC_CLIENT_ID;

const keycloakConfig = {
    url: BASE_URL_KC,
    realm: REAL_KC,
    clientId: CLIENT_ID_KC
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
