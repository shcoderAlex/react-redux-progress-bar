import React from 'react';
import { connect } from 'react-redux';
import './ProgressBar.css';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'pre-start',
    };
  }

  componentWillReceiveProps(newProps){
    this.loading(newProps);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  loading(props) {
    const { progressBar } = props;
    const className = (progressBar) ? 'start' : 'finish';

    this.setState({ className });

    if(className === 'finish'){
      this.timer = setTimeout(() => {
        this.setState({ className: 'pre-start' });
      }, 500);
    }
  }

  render() {
    const { className } = this.state;

    return (
      <div id='loadingbar' className={ className }>
        <dt/>
        <dd/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { progressBar } = state;
  return { progressBar };
};

export default connect(mapStateToProps)(ProgressBar);
