import './App.css';
import { graphql } from "@octokit/graphql";
import { useEffect, useState } from 'react';
//REACT_APP_env

const token = "token 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"

function App() {
  const [repository, setRepository] = useState({});
  const query = `
  {
    repository(name: "agora-states-fe", owner: "codestates-seb") {
      discussions(first: 10) {
        nodes {
          title
          createdAt
          bodyText
        }
      }
    }
  }
`
  const getData = async () => {
    const { repository } = await graphql(query,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(repository.discussions.nodes.map(el => {
      return el.title;
    }));
    return repository;
  }

  useEffect(() => {
    getData()
      .then(data => {
        return setRepository(data)
      })
      .catch(error => console.log(Error, error))
  }, [])

  return (
    <div className="App">
      <div>Hello agorastates</div>
      {repository.discussions.nodes.map(el => {
        return <div>{el.title}</div>;
      })}
    </div>
  );
}

export default App;
