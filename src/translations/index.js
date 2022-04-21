import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import AppTranslationsContext from 'context/AppTranslationsContext';
import English from './en';
import Vietnamese from './vi';

const AppTranslations = (props) => {
    const local = localStorage.getItem("locale") || 'vi';
    let lang;
    if (local === 'vi') {
        lang = Vietnamese;
    } else {
        lang = English;
    }

    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);
    function selectLanguage(e) {
        const newLocale = e;
        setLocale(newLocale);
        if (newLocale === 'vi') {
            setMessages(Vietnamese);
        } else {
            setMessages(English)
        }
        localStorage.setItem("locale", e);
    }

    return (
        <AppTranslationsContext.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </AppTranslationsContext.Provider>

    );
}


export default AppTranslations;
