import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default function FAQ() {
  return (
    <Segment>
      <Header as="h1">FAQ</Header>
      <Header as="h2">A quoi ça sert ?</Header>
      <p>Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.</p>
      <Header as="h2">Comment faire une recherche ?</Header>
      <p>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>
      <Header as="h2">Puis-je chercher n'importe quel terme ?</Header>
      <p>Oui, c'est fou.</p>
    </Segment>
  );
}
