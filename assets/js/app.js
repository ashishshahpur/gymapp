var options = [
        set0 = ['1','8978700050','Sameer','Mathad','@howzzaat','32','Javascript'],
        set1 = ['2','Option','Second Option','Third Option']
    ];

function makeUL(array[i]) {
    // Create the list element:
    for(var j=0; j<array.length; j++){
      var list = document.createElement('tr');



    for(var k = 0; k < array[j].length; k++) {
        // Create the list item:
        var item = document.createElement('td');

        // Set its contents:
        item.appendChild(document.createTextNode(array[k]));

        // Add it to the list:
        list.appendChild(item);
    }
  }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('cuslist').appendChild(makeUL(options[0]));
