import React from 'react';

// attention: une image en local s'importe comme un module
// webpack compile tous nos assets et refait la structure des dossiers
// dans "dist", donc s'il a un module il pourra récréer le chemin de l'image
import logo from 'src/assets/images/logo-github.png';
import './style.scss';

export default function Header() {
  return (
    <header className="app-header">
      <img
      className="Header__logo"
      src={logo}
      alt="Logo Github" />
    </header>
  );
}
