'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentLibs from '../../../libs/index.jsx';

import ChoiceForm from './choice-form.jsx';
import ChoicesGuideForm from './choices-guide-form.jsx';
import QuestionForm from './question-form.jsx';
import QuestionGroupForm from './question-group-form.jsx';
import Overview from './overview.jsx';

import fetchChoicesGuide from '../../lib/fetch.js'

export default class OpenStadComponentChoicesGuideForm extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
      image: {
      }
    });

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.setCurrentForm = this.setCurrentForm.bind(this)
    this.deleteElement = this.deleteElement.bind(this)

    this.state = {
      choicesGuideId: this.props.data.choicesGuideId,
      currentTarget: {
      },
      busy: false,
    };

    this.onFinished = this.props.onFinished;

  }

  componentDidMount(prevProps, prevState) {
    let self= this;
    self.fetchData();
    const beforeUnloadListener = (event) => {
      console.log('=', self.state.changed);
      if (self.state.changed) {
        event.preventDefault();
        event.returnValue = "Are you sure you want to exit?";
        return event;
      }
      return null;
    };
    window.addEventListener("beforeunload", beforeUnloadListener, {capture: true});
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
	  window.removeEventListener('beforeunload', self.unloadListener);
  }

  
  fetchData() {
    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
        self.setState({ ...data, busy: false }, () => {
          self.setCurrentForm({ what: 'choices-guide' });
          // TMP
          // self.setCurrentForm({ what: 'question', questionGroupId: 1, questionId: 95 });
        });
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });
  }

  handleFieldChange(data, changed = false) {
    let self= this;
    let currentTarget = self.state.currentTarget;

    console.log('self.state.changed', self.state.changed, changed);
    Object.keys(data).forEach((key) => {
      changed = changed || self.state.changed || ( currentTarget[key] != data[key] && key != 'choicesGuideConfig' );
      if (currentTarget[key] != data[key]) console.log(key);
      currentTarget[key] = data[key];
    });

    console.log('changed', changed);
    self.setState({ currentTarget, changed });

  }

  setCurrentForm(currentTarget) {
    let questionGroup;
    let choice;
    let question;

    switch (currentTarget.what) {

      case 'choices-guide':
        currentTarget.title = this.state.title;
        currentTarget.description = this.state.description;
        currentTarget.images = this.state.images ? this.state.images : '';
        currentTarget.choicesGuideConfig = this.state.choicesGuideConfig ? this.state.choicesGuideConfig : {};
        break;

      case 'choice':
        if (currentTarget.questionGroupId) {
          questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
          choice = questionGroup.choices && questionGroup.choices.find(choices => choices.id == currentTarget.choiceId) || {};
        } else {
          choice = this.state.choices.find(choices => choices.id == currentTarget.choicesId) || {};
        }
        currentTarget.questionGroup = questionGroup;
        currentTarget.title = choice.title;
        currentTarget.description = choice.description;
        currentTarget.images = choice.images;
        currentTarget.answers = choice.answers;
        currentTarget.seqnr = typeof choice.seqnr != 'undefined' ? choice.seqnr : 10;
        break;

      case 'question-group':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        currentTarget.title = questionGroup.title;
        currentTarget.description = questionGroup.description;
        currentTarget.answerDimensions = questionGroup.answerDimensions;
        currentTarget.seqnr = typeof questionGroup.seqnr != 'undefined' ? questionGroup.seqnr : 10;
        break;

      case 'question':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        question = questionGroup.questions && questionGroup.questions.find(question => question.id == currentTarget.questionId) || {};
        currentTarget.questionGroup = questionGroup;
        currentTarget.title = question.title;
        currentTarget.description = question.description;
        currentTarget.moreInfo = question.moreInfo;
        currentTarget.images = question.images;
        currentTarget.minLabel = question.minLabel;
        currentTarget.maxLabel = question.maxLabel;
        currentTarget.type = question.type;
        currentTarget.dimensions = question.dimensions;
        currentTarget.values = question.values;
        currentTarget.seqnr = typeof question.seqnr != 'undefined' ? question.seqnr : 10;
        break;

      default:
    }

    console.log('xxx');
    this.setState({ currentTarget, changed: false }, () => {
      console.log('=1', this.state.changed);
      window.scrollTo(0,0)
    });
  }

	validate({ showErrors, scrollTo }) {
    let self= this;
    let isValid = true;
    let firstInvalid = null

    let fields = self.formfields;

    Object.keys(self.state.currentTarget).forEach((field) => {
      if (fields[field+'Field'] && fields[field+'Field'].validate && !fields[field+'Field'].validate({ showErrors })) { 
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (scrollTo && firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({behavior: 'smooth'});
    return isValid;    

	}

  canSubmit() {
    let requiredUserRole = 'moderator';
    let user = this.config.user || {};
    return OpenStadComponentLibs.user.hasRole(user, requiredUserRole)
  }

  submitForm() {

    let self = this;

    self.setState({ busy: true, submitError: null }, () => {

      let isValid = self.validate({ showErrors: true, scrollTo: true });
      if (!isValid) return self.setState({ busy: false });

      if (!(self.canSubmit())) return alert('Je mag dit niet');

      let url;
      let body;
      let targetId;

      switch (self.state.currentTarget.what) {

        case 'choices-guide':
          targetId = self.state.choicesGuideId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
            config: self.state.currentTarget.choicesGuideConfig,
          };
          break;

        case 'choice':
          targetId = self.state.currentTarget.choiceId;
          if (self.state.currentTarget.questionGroupId) {
            url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  self.state.currentTarget.questionGroupId  }/choice`;
          } else {
            url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/choice`;
          }
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
            answers: self.state.currentTarget.answers,
            seqnr: self.state.currentTarget.seqnr,
          };
          try {
            body.answers = JSON.parse(body.answers)
          } catch (err) {}
          break;

        case 'question-group':
          targetId = self.state.currentTarget.questionGroupId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            answerDimensions: self.state.currentTarget.answerDimensions,
            seqnr: self.state.currentTarget.seqnr,
          };
          break;

        case 'question':
          targetId = self.state.currentTarget.questionId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  self.state.currentTarget.questionGroupId  }/question`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            moreInfo: self.state.currentTarget.moreInfo,
            images: self.state.currentTarget.images,
            minLabel: self.state.currentTarget.minLabel,
            maxLabel: self.state.currentTarget.maxLabel,
            type: self.state.currentTarget.type,
            dimensions: self.state.currentTarget.dimensions,
            values: self.state.currentTarget.values,
            seqnr: self.state.currentTarget.seqnr,
          };
          try {
            body.values = JSON.parse(body.values)
          } catch (err) {}
          break;

        default:
      }
      url += targetId ? `/${  targetId}` : '';

      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let method = targetId ? 'PUT' : 'POST';

      fetch(url, {
        method,
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
          if ( self.state.currentTarget.what == 'choices-guide' ) {
            self.onFinished()
          } else {
            self.fetchData();
          }
        })
        .catch(function(error) {
          error.then(function(messages) {
            try {
              messages = JSON.parse(messages);
              if ( typeof messages == 'object' ) messages = messages.message;
            } catch (err) {}
            self.setState({ submitError: { message: messages } })
            return console.log(messages);
          });
          self.setState({ busy: false, changed: false });
        });

    });
  }

  deleteElement({what, questionGroupId, choiceId, questionId, title}) {

    let self = this;

    self.setState({ submitError: null })
    
    if (!confirm("Je gaat " + what + " " + title + " verwijderen. Weet je het zeker?")) return;

    let url;
    switch (what) {

      case 'question-group':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }`;
        break;

      case 'choice':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }/choice/${ choiceId }`;
        break;

      case 'question':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }/question/${ questionId }`;
        break;

      default:
    }
    
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
    fetch(url, {
      method: 'DELETE',
      headers,
    })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {
        self.fetchData();
      })
      .catch(function(error) {
        error.then(function(messages) {
          try {
            messages = JSON.parse(messages);
            if ( typeof messages == 'object' ) messages = messages.message;
          } catch (err) {}
          self.setState({ submitError: { message: messages } })
          return console.log(messages);
        });
        self.setState({ busy: false });
      });
    
  }
  
  render() {

    let self = this;

    let title = null;
    let formfieldsHTML = null;
    let overviewHTML = null;
    let backButtonHTML = <button className="osc-button-white" onClick={() => { self.setCurrentForm({ what: 'choices-guide' }); }}>Terug</button>;
    let submitButtonHTML = <button className="osc-button-blue" onClick={event => self.submitForm()}>Opslaan</button>;
    switch (self.state.currentTarget.what) {

      case 'choices-guide':
        title = 'Bewerk keuzewijzer';
        formfieldsHTML = (<ChoicesGuideForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        overviewHTML = (<Overview questionGroups={self.state.questionGroups} setCurrentForm={self.setCurrentForm} deleteElement={self.deleteElement} ref={el => { self.formfields = el; }}/>);
        backButtonHTML =
          <button className="osc-button-white" onClick={() => { if (self.onFinished) self.onFinished(); }}>Terug</button>
        ;
        break;

      case 'choice':
        title = 'Bewerk Keuze';
        formfieldsHTML = (<ChoiceForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      case 'question-group':
        title = 'Bewerk Vragengroep';
        formfieldsHTML = (<QuestionGroupForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      case 'question':
        title = 'Bewerk Vraag';
        formfieldsHTML = (<QuestionForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      default:
        backButtonHTML =
          <button className="osc-button-white" onClick={() => { if (self.onFinished) self.onFinished(); }}>Terug</button>
        ;
        submitButtonHTML = null;
    }

    let errorMessageHTML = null;
    if (self.state.submitError) {
      errorMessageHTML = (
        <div className="osc-message osc-error">
          {self.state.submitError.message}
        </div>);
    }
    

    return (
      <div id={this.divId} className={`osc-form${this.state.busy ? ' osc-busy' : ''}`}>
        <h2>{title}</h2>

        {formfieldsHTML}
        {overviewHTML}

        {errorMessageHTML}

        <br/><br/>

        {backButtonHTML}
        {submitButtonHTML}

      </div>
    );

  }

}
