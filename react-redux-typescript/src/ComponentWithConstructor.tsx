import React from "react";

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

export default class ComponentWithConstructor extends React.Component<
  AppProps,
  AppState
> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
        <Display color="red" />
      </div>
    );
  }
}

const Display = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};
