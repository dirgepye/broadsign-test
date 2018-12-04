/* eslint-disable react/jsx-key */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PhotoBoardSection from 'components/PhotoBoardSection';

const stuff = ['fart', 'fdsafsd', 'poo', 'who cares'];

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   if (this.props.username && this.props.username.trim().length > 0) {
  //     this.props.onSubmitForm();
  //   }
  // }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            {stuff.map((key) => <PhotoBoardSection sectionTitle={key} />)}
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};
