import React, { useEffect } from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Message({ message, visible, onTimeout }) {
  // astuce pour ne pas rendre un compoasant condtionnellement
  // on peut retourner "null", ainsi le composant sera démonté
  if (!visible) {
    return null;
  }

  // useEffect(callback) => à chaque rendu
  // useEffect(callback, []) => au 1e rendu
  // useEffect(callback, [dependence1, dependence2])
  // => au 1e rendu et à chaque fois qu'une dependence change

  // fonction de nettoyage, pour n'importe quelle forme
  // useEffect(() => {
  //   return () => {}
  // })

  // on place un timer pour masquer le message
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('je veux masquer le message');
      onTimeout();
    }, 3000);
    // ici je peux nettoyer les timers et listeners
    // qu'on aura placé dans le useEffect(à la manière de componentWillUnmount)
    // il faut pour cela renvoyer une fonction
    // cette fonction sera exécuté au prochain rendu du composant
    // on l'appelle la fonction de nettoyage
    return () => clearTimeout(timer);
  });
  return (
    <div className="message">
      <MessageSUI>{message}</MessageSUI>
    </div>
  );
}
Message.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onTimeout: PropTypes.func.isRequired,
};
