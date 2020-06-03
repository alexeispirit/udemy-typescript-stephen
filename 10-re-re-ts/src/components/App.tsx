import React from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there</div>;
  }
}

function mapStateToProps(state: StoreState): { todos: Todo[] } {
  return {
    todos: state.todos,
  };
}

export const App = connect(mapStateToProps, { fetchTodos })(_App);

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };
