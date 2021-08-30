// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Loader from 'src/components/Loader';
import Menu from 'src/components/Menu';
import FAQ from 'src/components/FAQ';
import NotFound from 'src/components/NotFound';

import './style.scss';
import reposData from 'src/data/repos';

// pour ne pas avoir trop de data à passer à chaque fois
// on vient simplifier le tableau de données
function getCleanData(data) {
  return data.map((item) => ({
    id: item.id,
    imageUrl: item.owner.avatar_url,
    title: item.full_name,
    owner: item.owner.login,
    description: item.description ? item.description : 'No description available',
  }));
}

// == Composant
function App() {
  // const cleanData = getCleanData(reposData.items);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [request, setRequest] = useState('');

  const loadRepos = () => {
    setLoading(true);
    // console.log('je veux charger les repos');
    axios.get(`https://api.github.com/search/repositories?q=${request}`)
      .then((response) => {
        // une fois qu'on reçoit la réponse de la requête
        // on remplit le state avec les bonnes données
        const cleanData = getCleanData(response.data.items);
        setResults(cleanData);
        setMessage(`la rechercher a donné ${response.data.total_count} résultats`);
        setMessageVisible(true);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        // dans tous les cas, on sortir du statut de loading
        setLoading(false);
      });
  };

  const setNewRequest = () => {
    // ici on vient mémoriser la recherche de l'utilisateur à un instant T
    // quand il soumet le formulaire
    setRequest(searchValue);
  };
  // ici la forme de useEffect c'est au 1er rendu et chaque fois que request change
  // nous on ne veut pas lancer loadRepos au 1e rendu mais uniquement qd request change
  useEffect(() => {
    if (request !== '') {
      loadRepos();
    }
  }, [request]);

  return (
    <div className="app">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact>
          <SearchBar
            inputValue={searchValue}
            onChangeInputValue={setSearchValue}
            onFormSubmit={setNewRequest}
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <Message
                message={message}
                visible={messageVisible}
                // on peut stocker une fonction anonyme dans une props
                // cette fonction nous permet de changer la valeur de
                // messageVisible
                onTimeout={() => setMessageVisible(false)}
              />
              <ReposResults results={results} />
            </>
          )}
        </Route>
        <Route path="/faq"><FAQ /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

// == Export
export default App;
