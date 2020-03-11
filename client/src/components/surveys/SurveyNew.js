import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {

  const [showFormReview, setShowFormReview] = useState(false);

  if (showFormReview) {
    return <SurveyFormReview onCancel={() => setShowFormReview(false)} />
  }

  return <SurveyForm onSurveySubmit={() => setShowFormReview(true)}/>
};

//Default behavior of reduxForm: If this component (SurveyNew) is unmounted, all the values of surveyForm are dumped
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);