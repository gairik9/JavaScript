// SELECTING AN ELEMENT BY ID : ------------------------------------------

// let element = document.getElementById('title'); // id='title';
// console.log(element);

// TO KNOW THE CLASSNAME OF THE ELEMENT : --------------------------------

// document.getElementById('title').className;

// SETTING CSS STYLES USING JS : -----------------------------------------

// let element = document.getElementById("title");
// element.style.color = "green";
// element.style.textAlign = "center";
// element.style.margin = "20px";
// console.log(element);

// EXTRACTING CONTENT FROM AN ELEMENT : ----------------------------------
// let element = document.getElementById("title");

// let textInsideElement = element.textContent; // Process 1.
// let textInsideElement = element.innerHTML; // Process 2.
// let textInsideElement = element.innerText; // Process 3.
// console.log(textInsideElement);

// DIFFERENCE BETWEEN innerText AND innerContent AND innerHTML: ----------

// let element = document.getElementById('details');

// let textInsideElement = element.innerText; // If we use innerText, then the text inside <span>...</span> won't be visble as it's hidden using CSS property.

// let textInsideElement = element.textContent; // If we use textContent, then the entire text content within <p>...</p> including all the hidden texts gets displayed.

// let textInsideElement = element.innerHTML; // Displays everything including the HTML tags and attributes.

// console.log(textInsideElement);

// querySelector() : -----------------------------------------------------

// let data = document.querySelector('h1'); // Selects The First Matching Element. You Can Also Specify IDs, classNames etc. Example : '#idName', '.className'
// console.log(data);

// let data = document.querySelectorAll('h1'); // Selects All Matching Elements.
// console.log(data);

// Example One : ------------------------------------------------------------

// let listMain = document.querySelector('ul');
// let singleList = listMain.querySelector('li');

// singleList.style.backgroundColor = 'red';
// singleList.style.padding = '10px';

// console.log(singleList);

// Example Two : ---------------------------------------------------------

// let listMain = document.querySelector('ul');
// let singleList = listMain.querySelectorAll('li');

// singleList.forEach((list)=>{
//     list.style.color = "red";
//     list.style.padding = "10px";
//     console.log(list);
// })

// Converting HTML-Collections Or NodeLists To Array :

const names = document.getElementsByClassName('list-item');

const convertedArrayItems = Array.from(names)

convertedArrayItems.map((item)=>{
    item.style.color = 'green';
    item.style.margin = '20px';
    item.style.backgroundColor = 'red';
    item.style.padding = '10px';

    console.log(convertedArrayItems);
})





