import * as React from 'react';
import { withStyles } from 'material-ui';

import footerStyle, { FooterStyle } from '../../variables/styles/FooterStyle';

import { VIEW_COUNTER_URL } from '../../config';


class Footer extends React.Component<FooterStyle, {counter: string}> {

  constructor(props: FooterStyle) {
    super(props);
    this.state = {
      counter: "0"
    }; 
  }

  componentDidMount() {
    fetch(VIEW_COUNTER_URL)
      .then(response => response.json())
      .then(r => {
        this.setState({counter: r});
      });
  }

  render() {
    const {classes} = this.props;   
    
    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <p className={classes.left}>
            <span>
              当前访问量: {this.state.counter}
            </span>
          </p>
          <p className={classes.right}>
          <span>
            Copyright 2018, Software Engineering Institute, Peking University. All right reserved.
          </span>
          </p>
        </div>
      </footer>
    );
  }
}

export default withStyles(footerStyle)<{}>(Footer);