var listdb = ['Monthly','Quarterly','Half-Yearly','Annual']
var listdb1 = ['yes','no']
var listdb2 = ['Customer','Staff','System']
function getList(array,elementid){
var select = document.getElementById(elementid);
for (i = 0; i < array.length; i++) {
  var option = document.createElement('option');

        option.appendChild(document.createTextNode(array[i]));
        select.appendChild(option);
    }
    return option;
  }

//document.getElementById('testlist').appendChild(getList(listdb,'testlist'));
//document.getElementById('testlist1').appendChild(getList(listdb1,'testlist1'));
document.getElementById('usertype').appendChild(getList(listdb2,'usertype'))

console.log(document.getElementById('usertype').value);
