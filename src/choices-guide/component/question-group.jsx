'use strict';

import merge from 'merge';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentQuestion from './question.jsx';

// TPODO: remove answerDimensions form the API and DB

export default class OpenStadComponentQuestionGroup extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.noOfQuestionsToShow = this.config.noOfQuestionsToShow || 100;
    this.questionElements = [];

    this.state = {
      currentQuestion: 0,
      values: {},
    };

  }

  componentDidMount(prevProps, prevState) {
  }

  isValid() {

    let self = this;

    let isValid = true;
    let shownQuestions = self.props.data.questions.slice( self.state.currentQuestion, self.state.currentQuestion + self.noOfQuestionsToShow );
    let scrollDone = false;
    shownQuestions.forEach( ( question, i ) => {
      if ( !self.questionElements[i].isValid() ) {
        if (!scrollDone) {
          setTimeout( () => {
            console.log(self.questionElements[i]);
            console.log(self.questionElements[i].questionId);
            let elem = document.querySelector(`#osc-question-${self.questionElements[i].questionId}-content`);
            console.log(elem);
            elem && elem.scrollIntoView({behavior: 'smooth'})
          }, 250 );
        }
        scrollDone = true;
        isValid = false;
      }
    });
    return isValid;

  }

  getAnswers() {
    let self = this;
    let values = merge({}, this.props.data && this.props.data.values, self.state.values);
    self.props.data && self.props.data.questions.forEach( ( question, i ) => {
      let element = self.questionElements.find( elem => elem && elem.questionId == question.id );
      if (element) {
        if ( typeof element.getAnswer() != 'undefined' ) {
          values[question.id] = element.getAnswer();
        }
      }
    });
    self.setState({ values });
    return values;
  }

  gotoNextQuestion() {

    if (!this.isValid()) return {};

    let state = {};
    let currentQuestion = this.state.currentQuestion + this.noOfQuestionsToShow;

    if (currentQuestion >= this.props.data.questions.length) {
      currentQuestion = 0;
      this.setState({ currentQuestion });
      return { isReady: true, currentQuestion };
    }

    this.setState({ currentQuestion });
    return { isReady: false, currentQuestion };

  }

  gotoPreviousQuestion() {
    let currentQuestion = this.state.currentQuestion - this.noOfQuestionsToShow;
    if (currentQuestion < 0) {
      currentQuestion = 0;
      this.setState({ currentQuestion });
      return { isBeginning: true, currentQuestion };
    } else {
      this.setState({ currentQuestion });
      return { isBeginning: false, currentQuestion };
    }
  }

  render() {

    let self = this;

    let questionsHTML = null;

    let data = self.props.data || { questions: [] };

    let shownQuestions = data.questions.slice( self.state.currentQuestion, self.state.currentQuestion + self.noOfQuestionsToShow );

    let values = merge({}, this.props.data && this.props.data.values, self.state.values);

    questionsHTML =
      <div className="osc-questions">
        { shownQuestions.map((question, i) => {
          return <OpenStadComponentQuestion config={ { ...self.config, divId: `osc-question-${question.id}` } } data={{ ...question, value: values[question.id] }} key={`question-${question.id}`} ref={function(el) { self.questionElements[i] = el; }}/>;
        })}
      </div>;

    return (
      <div id={this.id} className="osc-question-group">
        <h3 className="osc-question-group-title">{data.title}</h3>
        <div className="osc-question-group-description" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        {questionsHTML}
      </div>
    );

  }

}
