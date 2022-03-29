import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';
import style from '../../styles/user.module.scss';

export default function ({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer keywords={"Пользователь " + user.name}>
            <div className={style.user}>
                <h1>Пользователь с id {query.id}</h1>
                <p>{user.name}</p>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user }
    }
}