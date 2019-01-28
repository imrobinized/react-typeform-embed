import React from 'react';
import { ReactTypeformEmbed } from '../components';

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://demo.typeform.com/to/njdbt5"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Click to open the popup!
        </button>
        <br />
        <br />
        <div style={{ height: '125px', background: '#003648', color: '#fff', padding: '20px' }}>
          some other content
          <br />
          but i'm blocked
          <br />
          <button onclick={() => window.alert('clicked')}>so you can't click me</button>
        </div>
      </div>
    );
  }
}

export default ExamplePopup;
