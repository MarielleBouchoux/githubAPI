import React from 'react';
import { Menu as MenuSUI } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <MenuSUI>
      <MenuSUI.Item
        as={NavLink}
        to="/"
        exact
      >
        Recherche
      </MenuSUI.Item>

      <MenuSUI.Item
        as={NavLink}
        to="/faq"
      >
        FAQ
      </MenuSUI.Item>
    </MenuSUI>
  );
}
