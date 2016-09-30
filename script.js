addMessage()


var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {
  console.log (keyCode)
  var keyCode = e;
  var inputValue = quantityInput.val();
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})
