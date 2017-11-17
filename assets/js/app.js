var options = [
        set0 = ['1','8978700050','Sameer','Mathad','@howzzaat','32','Javascript'],
        set1 = ['2','Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('tr');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('td');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
//document.getElementById('cuslist').appendChild(makeUL(options[0]));


document.querySelector('addcustomer').onClick = showAddCustomer;

function showAddCustomer() {
  document.getElementById('tablepanel').setAttribute('hidden', true);
  document.getElementById('customerform').setAttribute('hidden', false);

};
