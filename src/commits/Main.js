import { useEffect, useState } from 'react';
import Header from '../header/Header';

const Main = () => {

    const [loading, setLoading] = useState(true);
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const start = async () => {
            // axios
        }

        start();
    }, [])

    return (
        <>
            <Header></Header>
        </>
    )
}

export default Main