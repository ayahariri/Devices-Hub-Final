'user strict'

var deviceCategories = ['Mobile', 'Laptop', 'Tablet'];

function fillCategory(){
    var categoriesList = document.getElementById('categoryItems');
for (var i = 0 ; i<deviceCategories.length; i++){
var categoriesListOptions = document.createElement('option');
categoriesListOptions.textContent = deviceCategories[i];
categoriesList.appendChild(categoriesListOptions);
console.log(fillCategory);

}
}
fillCategory();

function getRandomInt (min, max){
max = Math.ceil(max);
min = Math.floor(min);
return Math.floor(Math.random() * (max - min)+min);
}

function Device(deviceName, quantity, unitPrice, category){
    this.deviceName = deviceName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.category = category;

    Device.all.push(this);
}
var deviceList = JSON.parse(localStorage.getItem('deviceList'));
if (deviceList){
    Device.all = deviceList;
    renderDeviceList();
} else{
Device.all = [];
}

var deviceForm = document.getElementById('deviceForm');
deviceForm.addEventListener('submit', deviceFormHandler);

function deviceFormHandler(event){
    event.preventDefault();
    deviceName = event.target.nameItemInput.value;
    category = event.target.categoryItems.value;
    quantity = event.target.quantityInput.value;
    unitPrice = getRandomInt(350, 750);

    var deviceItems = new Device(deviceName, quantity, unitPrice, category);
}localStorage.setItem('deviceList',JSON.stringify(Device.all));
var deviceTable = document.getElementById('myTable');
deviceTable.innerHTML = '';
renderDeviceList();

// function renderDeviceList(){
//     var deviceTable = document.getElementById('myTable');
// }

// function createTableHeader(){
//     var deviceTable = document.getElementById('myTable');
//     var tableHeader = document.createElement('th');
// tableHeader.textContent = 
// }

