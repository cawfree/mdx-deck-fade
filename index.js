import React from 'react';
import { Fade as Component } from '@material-ui/core';
import { withDeck, updaters } from 'mdx-deck';

class Fade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: Number.MAX_VALUE,
    };
    const { deck } = props;
    const { update, index } = deck;
    return update(
      updaters
        .setSteps(
          index,
          1,
        )
    );
  }
  shouldComponentUpdate(nextProps) {
    const { deck } = nextProps;
    const { active } = deck;
    return active;
  }
  render() {
    const { deck, children, ...extraProps } = this.props;
    const { step } = deck;
    const currentStep = step || 0;
    const hide = currentStep === 0;
    const props = !hide ? { in: true } : {};
    return (
      <Component
        {...props}
      >
        <div
          {...extraProps}
        >
          {children}
        </div>
      </Component>
    );
  }
}

export default withDeck(
  Fade,
);
