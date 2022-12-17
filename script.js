todoMain();

// Hämtar elementen
function todoMain() {
	let inputElem,
		dateInputElem,
		button,
		allElem,
		personalElem,
		workElem,
		selectElem;


	getElements();
	AddListners();

 // hämtar värden från våra input och select
function getElements() {
	inputElem = document.getElementsByTagName("input")[0];
	button = document.getElementById("addBtn");
	selectElem = document.getElementsByTagName("select")[0];
	allElem = document.getElementById("allRadioBtn");
	personalElem = document.getElementById("personalRadioBtn");
	workElem = document.getElementById("workRadioBtn");
	dateInputElem = document.getElementById("dateInput");
}

// Kopplar på händelser till ett event
function AddListners() {
	button.addEventListener("click", addEntry, false);
	allElem.addEventListener("change", categoryEntries, false);
	personalElem.addEventListener("change", categoryEntries, false);
	workElem.addEventListener("change", categoryEntries, false);
}

// skapar en event som ska vara med i listan
function addEntry(event) {

	let inputValue = inputElem.value;
	inputElem.value = "";
	let selectValue = selectElem.value;
	let dateValue = dateInputElem.value;
	dateInputElem.value = "";

	// Adderar rad till todo listan
	let table = document.getElementById("todoTable");
	let trElem = document.createElement("tr");
	table.appendChild(trElem);

	// Checkbox
	let checkboxElem = document.createElement("input");
	checkboxElem.type = "checkbox";
	checkboxElem.addEventListener("click", done, false)
	let tdElem1 = document.createElement("td");
	tdElem1.appendChild(checkboxElem);
	trElem.appendChild(tdElem1);

	// Att göra todo
	let tdElem2 = document.createElement("td");
	tdElem2.innerText = inputValue;
	trElem.appendChild(tdElem2);
	
	// Kalender
	let tdElem3 = document.createElement("td");
	tdElem3.innerText = dateValue;
	trElem.appendChild(tdElem3);
	

	// Kategori
	let tdElem4 = document.createElement("td");
	tdElem4.innerText = selectValue;
	trElem.appendChild(tdElem4);

	// Ta bort knappen med funktioner 
	let spanElem = document.createElement("span");
	spanElem.innerText = "delete";
	spanElem.className = "material-symbols-outlined";
	spanElem.addEventListener("click", deleteItem, false);
	let tdElem5 = document.createElement("td");
	tdElem5.appendChild(spanElem);
	trElem.appendChild(tdElem5);

	// Ta bort/radera en todo
	function deleteItem(){
		trElem.remove();
	}

	function done(){
		trElem.classList.toggle("strike");
	}

	}

	// funktion för att filtera todo med hjälp av radio knappar
	function categoryEntries() {
		let rows = document.getElementsByTagName("tr");

		Array.from(rows).forEach((row)=>{
			let category = row.getElementsByTagName("td")[2].innerText;
			if (allElem.checked){
				row.style.display = "";
			}
			else if(category === personalElem.value && personalElem.checked){
				row.style.display = "";
			}
			else if(category === workElem.value && workElem.checked){
				row.style.display = "";
			}
			else{
				row.style.display = "none";
			}
		});
	}
} 

// filter sökning funktionen 
function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("todoTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[1];
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }

  // ha dagens datum som standard
  let currentDate = new Date().toISOString().substring(0, 10); {

	document.getElementById("dateInput").defaultValue = currentDate;
}