import React, { useState, useEffect } from "react";

const Starred = ({ starred_url }) => {
    useEffect(() => {
        console.log(starred_url);
        fetch(starred_url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setAllRepos(data);
            });
    }, [starred_url]);
    let dataToReturn = [];
    const [allRepos, setAllRepos] = useState(() => {
        fetch(starred_url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                dataToReturn = [...data];
            });
        return dataToReturn;
    });
    return (
        <section className="starred">
            <div className="starred-container">
                <div className="starred-row row">
                    {
                        allRepos.map((repo, index) => {
                            return (
                                <div className="col-lg-50 col-md-50 col-sm-100" key={index}>
                                    <div className="starred-repo-container">
                                        <div className="starred-repo">
                                            <div className="starred-repo-user">
                                                <a className="starred-repo-user__link" href={repo.owner.html_url}>
                                                    <img className="starred-repo-user__img" src={repo.owner.avatar_url} alt={repo.owner.login} />
                                                </a>
                                            </div>
                                            <div className="starred-repo-content">
                                                <div className="starred-repo-content__name">
                                                    <a href={repo.html_url}>
                                                        {repo.name}
                                                    </a>
                                                </div>
                                                <div className="starred-repo-content__user">
                                                    <a href={repo.owner.html_url}>
                                                        {`@${repo.owner.login}`}
                                                    </a>
                                                </div>
                                                <div className="starred-repo-content__details">
                                                    <div className="starred-repo-content__details__language">
                                                        <span className="material-icons">language</span>
                                                        <span>{repo.language}</span>
                                                    </div>
                                                    <div className="starred-repo-content__details__stars">
                                                        <span className="material-icons">star</span>
                                                        <span>{repo.stargazers_count}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Starred
