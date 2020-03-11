import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = ({ fetchSurveys, surveys }) => {

  useEffect(
    () => {
      fetchSurveys();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const renderSurveys = () => {
    return surveys.reverse().map(survey => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="/">Yes: {survey.yes}</a>
            <a href="/">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>{renderSurveys()}</div>
  );
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);