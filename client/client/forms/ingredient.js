var MultiFieldView = require('ampersand-multifield-view');
var InputView = require('ampersand-input-view');
 
module.exports = MultiFieldView.extend({
  fields: [
    new InputView({
      name: 'amount',
      label: 'Amount',
      placeholder: 'Amount',
      value: ''
    }),
    new InputView({
      name: 'item',
      label: 'Item',
      placeholder: 'Item',
      value: ''
    })
  ]
});