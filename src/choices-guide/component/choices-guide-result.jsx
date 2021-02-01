'use strict';

import fingerprint from 'fingerprintjs2';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';
import fetchChoicesGuide from '../lib/fetch.js'

export default class OpenStadComponentChoicesGuideResult extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      submission: {
        type: 'none',
      },
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: 'Jouw voorkeur is {preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
        },
        withPercentage: true,
        minLabel: null,
        maxLabel: null,
      },
    });

    let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
    this.state = {
      title: '',
      answers: allValues[ this.config.choicesGuideId ],
      scores: allScores[ this.config.choicesGuideId ],
    };

  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {

    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
        self.setState(data, () => {
          self.startGuide();
        });
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  startGuide() {
    let self = this;
    let scores, planePos;
    ( {scores, planePos} = self.choicesElement && self.choicesElement.calculateScores(self.state.answers) );

    let choicesTitle = '';
    let name;
    let preferredChoiceId = -1;
    if ( self.choicesElement ) {

      let choiceElement = self.choicesElement.getPreferedChoice({planePos});
      if ( choiceElement ) {
        choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
        preferredChoiceId = choiceElement.divId
      } else {
        choicesTitle = self.config.choices.title.inBetween;
      }

      self.setState({ title: choicesTitle })

		  var event = new window.CustomEvent('osc-choices-guide-result-is-ready', {
        detail: {
          preferredChoice: {
            name,
            title: choicesTitle,
            preferredChoiceId
          },
          answers: self.state.answers,
          scores: self.state.scores,
        }
      });
		  document.dispatchEvent(event);

      if (self.config.submission.type == 'auto') {
        self.submitResult()
      }

    }
    
  }

  submitResult() {

    let self = this;

    let formValues;
    if (self.config.submission.type == 'form') {
      formValues = self.form.getValues();
      let isValid = self.form.validate({ showErrors: true });
      if (!isValid) return;
    }

    fingerprint.get(fingerprintComponents => {

      let fingerprintData;
      try {
        fingerprintData = JSON.stringify(fingerprintComponents);
      } catch (err) {}
      
      let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let body = {
        result: {
          answers: self.state.answers,
          scores: self.state.scores,
        },
        extraData: formValues,
        userFingerprint: btoa(fingerprintData),
      };

      fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
        .then( function(response) {
          if (response.ok) {
            return response.json();
          }
          throw response.text();
        })
        .then(function(json) {
          if (self.config.submission.type == 'form') {
            document.location.href = self.config.afterUrl
          }
        })
        .catch(function(error) {
          error.then(function(messages) { return console.log(messages);} );
        });

    })

  }

  render() {

    let self = this;
    let data = self.props && self.props.data || {};

    let choices = self.state.choices;
    let questionGroup;
    if (self.state.questionGroups) {
      questionGroup = self.state.questionGroups.find( group => group.id == self.config.questionGroupId );
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
        }
      }
    }

    let choicesHTML = null;
    if (choices) {
      choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices }} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;
    }

    let moreInfoHTML = null;
    if (self.config.moreInfoUrl && self.config.moreInfoLabel) {
      moreInfoHTML =
        <div className="osc-more-info-link">
          <a href={self.config.moreInfoUrl}>{self.config.moreInfoLabel}</a>
        </div>
    }

    let formHTML = null;
    let previousNextButtonsHTML = null;
    if (self.config.submission.type == 'form') {
      formHTML = (
        <OpenStadComponentForms.Form config={ self.config.submission.form }  ref={function(el) { self.form = el; }}/>
      );
      

      let previousUrl = null; let previousAction = null; let previousLabel = null;

      if (self.config.beforeUrl) {
        previousUrl = self.config.beforeUrl;
        previousLabel = self.config.beforeLabel || 'Vorige'
      }

      let nextUrl = null;
      let nextAction = () => { self.submitResult(); }
      let nextLabel = self.config.afterLabel || 'Opslaan'
      
      if ( previousLabel || nextLabel ) {
        previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel}/>
      }

    }
    
    return (
      <div className="osc-choices-guide">
        <div className="osc-result">
          <div className="osc-result-content">
            <div className={`osc-choices-container ${'osc-type-' + self.config.choices.type}`}>
              <h3 dangerouslySetInnerHTML={{ __html: self.state.title }}></h3>
              {choicesHTML}
            </div>
            {moreInfoHTML}
            {formHTML}
          </div>
        </div>
       {previousNextButtonsHTML}
      </div>
    );

  }

}
