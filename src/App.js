import React from 'react';
import './App.scss';
import Success from '@bentley/bwc-react/icons/status/SuccessHollow'
import Close from '@bentley/bwc-react/icons/Close'

export default class App extends React.Component {
  render() {
    return (
      <div>

        <div className="toast-container">
          <div className="icon-background"><Success className="status-icon" /></div>
          <div className="message">Job Processing Complete </div>
          <div className="report">View the Report</div>
          <div className="close-icon-container"><Close className="close-icon" /></div>
        </div>
      </div>

    )
  }
}
