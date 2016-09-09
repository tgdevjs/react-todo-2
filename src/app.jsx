var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions') ;
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');


// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp/>
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
