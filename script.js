addMessage()


var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {
  console.log ("ok")
  var keyCode = e.13;
  var inputValue = quantityInput.val();

  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 5; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}
