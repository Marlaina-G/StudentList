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
let page = 1;
const itemsPerPage = 9;
const studentList = document.getElementsByClassName("student-item cf");
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
    //studentList[i].style.display = 'block';
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

// Call functions
