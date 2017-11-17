document.querySelector('addcustomer').onClick = showAddCustomer;

function showAddCustomer() {
  document.getElementById('tablepanel').setAttribute('hidden', true);
  document.getElementById('customerform').setAttribute('hidden', false);

};
