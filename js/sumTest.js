function checkTotal() {
    var sum = 0;
    var checkbox = document.querySelectorAll('.checkbox');
    for (i = 0; i < 3; i++) {
      if (checkbox[i].checked) {
        sum = sum + parseInt(checkbox[i].value);
      }
    }
    
    document.querySelector('#subTotal').innerHTML = 'Sub-total: £' + sum;
    
    var qty = 0;
    var option = document.querySelector('#quantity');
    qty = qty + option.value;
    
    document.querySelector('#total').innerHTML = 'TOTAL: £' + parseInt((100 + sum)*qty);
  }