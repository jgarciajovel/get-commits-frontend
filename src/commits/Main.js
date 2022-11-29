import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Commit from '../commit/Commit';

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
        <div className='h-screen bg-gradient-to-b from-blue-50 to-blue-100'>
            <Header></Header>
            <div className='w-full max-w-screen-xl relative mx-auto px-6 pt-5'>
                <div className='relative bg-white px-6 pt-8 pb-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-sm sm:px-10'>

                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            <Commit name="juancarlos.jsx"/>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main