import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Repo from './Repo';


import './style.scss';

export default function ReposResults({ results }) {
  const reposList = results.map((result) => (
    <Repo
      key={result.id}
      {...result}
    />
  ));
  return (
    <div className="repos-results">
      <Card.Group itemsPerRow={3}>
        {reposList}
      </Card.Group>
    </div>
  );
}
ReposResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
}
