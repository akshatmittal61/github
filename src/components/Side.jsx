import React, { useState, useEffect } from "react";

const Side = ({ repo_url, aside }) => {
	useEffect(() => {
		fetch(repo_url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAllRepos(data);
			});
	}, [repo_url]);
	let dataToReturn = [];
	const [allRepos, setAllRepos] = useState(() => {
		fetch(repo_url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				dataToReturn = [...data];
			});
		return dataToReturn;
	});
	return (
		<aside className={`side side-${aside ? "expand" : "hide"}`}>
			<div className="side-container">
				<ul className="side-list">
					{allRepos.map((repo, index) => {
						return (
							<li key={index} className="side-list-item">
								<a href={repo.owner.html_url} className="side-list-item__user">
									<img src={repo.owner.avatar_url} alt={repo.owner.login} />
								</a>
								<a href={repo.html_url} className="side-list-item__repo">
									{repo.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default Side;

