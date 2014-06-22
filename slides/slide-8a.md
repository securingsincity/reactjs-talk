##Testing React

###Jest
```javascript
var React = require('react/addons');
var gronkButton = require('../js/button.jsx');
var TestUtils = React.addons.TestUtils;
```
```javascript
describe('button test', function() {
  it('changes the text after multiple clicks', function() {

    var button = <gronkButton name="hi"/>;
    TestUtils.renderIntoDocument(button);
    var div = TestUtils.findRenderedDOMComponentWithTag( button, 'div');
    var buttonDom = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(div.getDOMNode().textContent).toEqual('hi Count : 0');
    for(var i = 1; i < 10; i++){
        React.addons.TestUtils.Simulate.click(buttonDom.getDOMNode());
        expect(div.getDOMNode().textContent).toEqual('hi Count : '+i);
    }
  });
});

```
