import React, { useState } from 'react'
import Side from './Side'
import Button from './Button';
import Starred from './Starred';

const Main = ({ aside }) => {
    const [username, setUsername] = useState("akshatmittal61");
    const [inputUserName, setInputUserName] = useState("");
    const url = (`https://api.github.com/users/${username}`);
    const change = (a) => {
        let dataToRetrun = {};
        fetch(a)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
                dataToRetrun = data;
            })
        return dataToRetrun;
    }
    const [user, setUser] = useState(() => {
        const data = change(url);
        return data;
    });
    const handleChange = (e) => {
        const { value } = e.target;
        setInputUserName(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(inputUserName);
        const urlToSet = `https://api.github.com/users/${inputUserName}`;
        change(urlToSet);
    }
    return (
        <main className="main">
            <Side repo_url={user.repos_url} aside={aside} />
            <div className={`page page-aside-${aside ? "expand" : "hide"}`}>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Enter user name"
                        value={inputUserName}
                        onChange={handleChange}
                    />
                    <Button type="submit" text="Submit" color="blue" variant="fill" size="small" />
                </form>
                <div className="card">
                    <div className="card-frame">
                        <div className="card-box">
                            <div className="card-head">
                                <div className="card-head-image" onClick={() => { console.log(user) }}>
                                    <img
                                        className="card-head-image__img"
                                        src={user.avatar_url}
                                        alt={user.name}
                                    />
                                </div>
                                <div className="card-head-content">
                                    <div className="card-head-content__name">
                                        {user.name}
                                    </div>
                                    <div className="card-head-content__login">
                                        <a href={user.html_url} className="card-head-content__login">{`@${user.login}`}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <Starred starred_url={url + "/starred"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
