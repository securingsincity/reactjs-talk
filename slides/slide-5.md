##How Does React Work?

Most people will use JSX transformer to take this:

```javascript
/** @jsx React.DOM */
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.renderComponent(<HelloMessage name="John" />, mountNode);
```
<!-- .element: class="fragment" data-fragment-index="2" -->

And turn it into this: <!-- .element: class="fragment" data-fragment-index="4" -->

```javascript
/** @jsx React.DOM */
var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function() {
    return React.DOM.div(null, "Hello ", this.props.name);
  }
});

React.renderComponent(HelloMessage( {name:"John"} ), mountNode);
```
<!-- .element: class="fragment" data-fragment-index="4" -->
