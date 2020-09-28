/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/**********************
Global Variables
**********************/
const divPage = document.querySelector(".page");
const link = document.querySelector(".link-list");
let page = 1;
const itemsPerPage = 9;
const studentList = document.querySelector(".student-list");
const studentItemList = document.getElementsByClassName("student-item cf");
const paginationButtons = document.getElementsByTagName("a");

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  // list → represents student data that will be passed as an argument when showPage is called
  // page → represents the page number that will be passed as an argument when the showPage is called

  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  //provides amount of pages needed to display a max of 9 students per page
  const pageCount = Math.ceil(list.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    let pageLink = `<li><button type="button">${i}</button></li>`;
    link.insertAdjacentHTML("beforeend", pageLink);

    link.querySelectorAll("button")[0].className = "active";

    link.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        link.querySelector(".active").className = "";

        e.target.className = "active";

        showPage(list, e.target.textContent);
      }
    });
  }
}

// Call functions
showPage(studentItemList, 1);
addPagination(studentItemList);
