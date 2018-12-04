import React from 'react';
import PropTypes from 'prop-types';

export default class SectionTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="section-title">
        <h3 className="section-title-content">{this.props.title}</h3>
        <hr className="section-title-divider" />
      </div>
    );
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};
