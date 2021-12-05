//DOM variables
let name = document.querySelector('.name-of-expense').addEventListener('input', getName);

let date = document.querySelector('.date').addEventListener("blur", getMyDateValue);

let amount = document.querySelector('.amount').addEventListener('input', getAmount);

let addBtn = document.querySelector('.btn').addEventListener('click', getAllValues);

//variables
let gotName,
    gotDate,
    gotAmount,
    gotAllValues;


//functions
function getName(){
  gotName = this.value;
  console.log(gotName);
}

// Note to self, review functions and find out what is "e"!!
function getMyDateValue(e) {
  // Get the date value from the srcElement of the event
  gotDate = e.srcElement.value.split('-').join(".");
  // Make sure we are dealing with an array of at least length 2
  // if (gotDate.length > 1) {
  //    // Format the date as needed
  //    // Currently mm/dd/yyyy
  //   console.log(gotDate[1] + '/' + gotDate[2] + '/' + gotDate[0]);
  // }  
}


function getAmount(){
  gotAmount = this.value;
  console.log(gotAmount);
}

function getAllValues(){
  gotAllValues = [gotName, gotDate, gotAmount];
  createElements()
}


function createElements(){
  let tdtags,
      trTags,
      table;

      table = document.querySelector('.cont');

      trTags = document.createElement('tr');
      trTags.className = 'data';
      gotAllValues.forEach(function (element){
       

        tdtags = document.createElement('td');
        tdtags.innerHTML = element;

        trTags.appendChild(tdtags);
        
      });
      table.appendChild(trTags)
      
    }

