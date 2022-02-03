function concordeTotal() {
    var conSum = 0;
    var conCheckbox = document.querySelectorAll('.conCheckbox');
    for (i = 0; i < 3; i++) {
      if (conCheckbox[i].checked) {
        conSum = conSum + parseInt(conCheckbox[i].value);
      }
    }
    
    document.querySelector('#conOETotal').innerHTML = '£' + conSum;
    
    var conQty = 0;
    var conOption = document.querySelector('#conQty');
    conQty = conQty + conOption.value;
    
    document.querySelector('#conTotal').innerHTML = '£' + parseInt((23000000 + conSum) * conQty);
  }

  function belugaTotal() {
    var belSum = 0;
    var belCheckbox = document.querySelectorAll('.belCheckbox');
    for (i = 0; i < 3; i++) {
      if (belCheckbox[i].checked) {
        belSum = belSum + parseInt(belCheckbox[i].value);
      }
    }
    
    document.querySelector('#belOETotal').innerHTML = '£' + belSum;
    
    var belQty = 0;
    var belOption = document.querySelector('#belQty');
    belQty = belQty + belOption.value;
    
    document.querySelector('#belTotal').innerHTML = '£' + parseInt((200000000 + belSum) * belQty);
  }

  function blackbirdTotal() {
    var bbSum = 0;
    var bbCheckbox = document.querySelectorAll('.bbCheckbox');
    for (i = 0; i < 3; i++) {
      if (bbCheckbox[i].checked) {
        bbSum = bbSum + parseInt(bbCheckbox[i].value);
      }
    }
    
    document.querySelector('#bbOETotal').innerHTML = '£' + bbSum;
    
    var bbQty = 0;
    var bbOption = document.querySelector('#bbQty');
    bbQty = bbQty + bbOption.value;
    
    document.querySelector('#bbTotal').innerHTML = '£' + parseInt((33000000 + bbSum) * bbQty);
  }

  function b2SpiritTotal() {
    var b2Sum = 0;
    var b2Checkbox = document.querySelectorAll('.b2Checkbox');
    for (i = 0; i < 3; i++) {
      if (b2Checkbox[i].checked) {
        b2Sum = b2Sum + parseInt(b2Checkbox[i].value);
      }
    }
    
    document.querySelector('#b2OETotal').innerHTML = '£' + b2Sum;
    
    var b2Qty = 0;
    var b2Option = document.querySelector('#b2Qty');
    b2Qty = b2Qty + b2Option.value;
    
    document.querySelector('#b2Total').innerHTML = '£' + parseInt((530000000 + b2Sum) * b2Qty);
  }

  function criCriTotal() {
    var criSum = 0;
    var criCheckbox = document.querySelectorAll('.criCheckbox');
    for (i = 0; i < 3; i++) {
      if (criCheckbox[i].checked) {
        criSum = criSum + parseInt(criCheckbox[i].value);
      }
    }
    
    document.querySelector('#criOETotal').innerHTML = '£' + criSum;
    
    var criQty = 0;
    var criOption = document.querySelector('#criQty');
    criQty = criQty + criOption.value;
    
    document.querySelector('#criTotal').innerHTML = '£' + parseInt((200000 + criSum) * criQty);
  }

  