import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle';

export default class PhotoBoardSection extends React.PureComponent {
  render() {
    return (
      <section>
        <SectionTitle title={this.props.sectionTitle} />
      </section>
    );
  }
}

PhotoBoardSection.propTypes = {
  sectionTitle: PropTypes.string,
};

