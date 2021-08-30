import React from 'react';
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function SearchBar({ inputValue, onChangeInputValue, onFormSubmit }) {
  const handleOnChange = (event) => {
    // console.log('handleOnChange', event.target.value);
    // là j'ai repris la main sur mon composant
    onChangeInputValue(event.target.value);
  };
  const handleOnSubmit = () => {
    // console.log('handleOnSubmit on veut lancer la recherche');
    onFormSubmit();
  };

  return (
    <div className="search-bar">
      <Segment>
        <Form onSubmit={handleOnSubmit}>
          <Form.Input
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Tapez votre recherche"
            value={inputValue}
            onChange={handleOnChange}
          />
        </Form>
      </Segment>
    </div>
  );
}
SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
