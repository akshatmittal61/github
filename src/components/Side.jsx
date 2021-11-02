import React, { useState, useEffect } from 'react'

const Side = ({ repo_url, open }) => {
    useEffect(() => {
        console.log("useeffect called");
        handleChange(dataToReturn);
    },[])
    const repoNames = [];
    let dataToRetrun = [];
    fetch(repo_url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            dataToRetrun = data;
            // handleChange(data);
        })
    const [allRepos, setAllRepos] = useState(() => {
        return dataToRetrun;
    });
    const handleChange = (a) => {
        console.log(a);
        setAllRepos(a);
    }
    return (
        <aside className="side" onClick={() => { handleChange(); }} style={{ width: open ? "17.5%" : "0%" }}>
            <div>
                <ul>
                    {
                        allRepos.map(repo => {
                            return (
                                <li>{repo.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Side
