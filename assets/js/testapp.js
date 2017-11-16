var options = [
        ['1','8978700050','Sameer','Mathad','@howzzaat','32','Javascript'],
        ['2','Option','Second Option','Third Option','@hydvoice','2','Javascript'],
        ['3','Srikanth','Reddy','Third Option','@hydvoice','2','Javascript'],
        ['4','Ashwin','Reddy','Third Option','@hydvoice','2','Javascript']
    ];
//console.log(options.length);

function makeTable(array){
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
console.log(array) for (i = 0; i < array.length; i++) { var tr = document.createElement('tr');
var option = array[i];
    for (j = 0; j < option.length; j++) {
        var td = document.createElement('td')
        td.appendChild(document.createTextNode(option[j]));
        tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
   return tableBody;
console.log(tableBody);
}



document.getElementById('table').appendChild(makeTable(options));
