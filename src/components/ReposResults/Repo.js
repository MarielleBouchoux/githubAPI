import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function Repo({
  imageUrl,
  title,
  owner,
  description,
}) {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header className="card-title">{title}</Card.Header>
        <Card.Meta>
          <span>{owner}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
Repo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
};
// avec la valeur "null" on ne peut pas avoir la defaultProps
Repo.defaultProps = {
  description: 'No description available',
};
