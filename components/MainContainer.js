import React from 'react';
import A from "../components/A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={'Главная страница ' + keywords} />
                <title>Главная страница</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text='Главная' />
                <A href={'/users'} text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer