'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentModalPopup from '../../modal-popup/index.jsx';

export default class OpenStadComponentNotLoggedInPopup extends OpenStadComponent {

  constructor(props) {
    super(props, {
      loginUrl: '',
    });
  }
  
  showPopup() {
		// dispatch an event
    let self = this;
		var event = new window.CustomEvent('osc-show-modal-popup', { detail: {
      divId: this.divId,
      title: 'Login om verder te gaan',
      text: 'Login om een argument te plaatsen, te reageren of een argument te liken',
      buttonAction: () => { OpenStadComponentLibs.localStorage.set('osc-login-pending-scroll-to-reactions', true); OpenStadComponentLibs.localStorage.set('osc-login-pending-show-details', self.config.ideaId); document.location.href = this.config.loginUrl; },
      buttonText: 'Inloggen',
    }});
		document.dispatchEvent(event);
  }
  
  render() {
    return (
      <OpenStadComponentModalPopup id={this.divId} ref={el => (self.modalPopup = el)}/>
    );
  }

}
