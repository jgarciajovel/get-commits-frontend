import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../header/Header';
import Commit from '../commit/Commit';

const Main = () => {

    const [repo, setRepo] = useState('backend');
    const [loading, setLoading] = useState(true);
    const [commits, setCommits] = useState([]);
    const [error, setError] = useState('');

   function Loader() {
        return (
            <div role="status" className='grid place-items-center pt-2'>
                <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    const start = async (repo) => {
        const baseURL = `http://localhost:3000`;

        const req = axios.create({
            baseURL,
            timeout: 7200,
        });
    
        let response = await req.get(`commits/`+repo).catch(error => {
            return { error };
        });

        let commits = []

        if (response.status === 200) {
            commits = response.data.commits;
        } else {
            console.log(response.error.message);
            setError(response.error.message);
        }

        setCommits(commits);
        setLoading(false);
    }

    useEffect(() => {
        start(repo);
    }, [])

    const selectRepo = (repo) => {
        setCommits([]);
        setRepo(repo);
        setLoading(true);
        start(repo);
    }

    return (
        <>
            <Header></Header>
            <div className='min-h-screen pb-10 bg-gradient-to-b from-blue-50 to-blue-100'>
                <div className='max-w-screen-xl relative mx-auto px-6 pt-5'>
                    <div className='relative bg-white pt-1 pb-10 shadow-sm ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-md px-10'>

                        <div className="flow-root">
                            <div className='text-xs text-center border-b mb-8'>
                                <ul className='flex flex-wrap -mb-px'>
                                    <li onClick={() => selectRepo('backend')}>
                                        <p className={`font-regular cursor-pointer inline-block mt-5 mr-5 pb-3 rounded-t-lg border-b-1 border-transparent ${repo === 'backend' ? ' text-purple-600 hover:text-purple-400 border-b-2 border-purple-600 font-bold' : 'text-gray-600 hover:text-gray-400 border-b-2 font-medium'}`}>BACKEND</p>
                                    </li>

                                    <li onClick={() => selectRepo('frontend')}>
                                        <p className={`font-regular cursor-pointer inline-block mt-5 mr-5 pb-3 rounded-t-lg border-b-1 border-transparent ${repo === 'frontend' ? ' text-purple-600 hover:text-purple-400 border-b-2 border-purple-600 font-bold' : 'text-gray-600 hover:text-gray-400 border-b-2 font-medium'}`}>FRONTEND</p>
                                    </li>
                                </ul>
                            </div>

                            <ul className="-my-6 divide-y divide-gray-200">

                                {loading === true ? <Loader></Loader> : commits.map((commit, index) => (
                                    <Commit name={commit.author.login} message={commit.commit.message} url={commit.html_url} date={commit.commit.committer.date} avatar={commit.author.avatar_url} type={repo} key={index}/>
                                ))}

                                {error !== '' && loading === false ? (<div className='grid place-items-center'><p>{error}</p></div>) : '' }

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main