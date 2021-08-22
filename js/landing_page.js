/* Initially selected plan */
let activePlan = 2;

function makeThisPlanActive(plan_id) {
  /* first we remove the active classes from the current active plan */
  document.getElementById(`plan_${activePlan}`).classList.remove("plan_active");

  document.getElementById(`select_btn_${activePlan}`).classList.remove("select_active");

  /* Adding active classes to newly selected plan */
  document.getElementById(`plan_${plan_id}`).classList.add("plan_active");

  document.getElementById(`select_btn_${plan_id}`).classList.add("select_active");

  /* We update our active plan */
  activePlan = plan_id;
}

/* Initially selected review */

const reviewOrder = [0, 1, 2];
const reviewData = [
  {
    image: "../images/robert.svg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    content: `“Wow... I am very happy to use this MaxCX service, it turned out to be more than my expectations and so far there have been no problems. MaxCX always the best.”`,
  },
  {
    image: "../images/christy.svg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    content: `“I like it because I’ve my userbase around the globe and MaxCX just makes it a lot easier for me removing all the inter-continent barriers.”`,
  },
  {
    image: "../images/jou.svg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    content: `“This is very unusual for my business that currently requires a partner that keeps my data at the highest possibe security.”`,
  },
];

const totalReviews = reviewOrder.length;

function cycleThroughReviews(value) {
  // pop -> removes from end
  // shift -> removes from start
  // push -> adds at end
  // unshift -> adds at front

  if (value === 1) {
    var toShift = reviewOrder.shift();
    reviewOrder.push(toShift);
  } else {
    var toShift = reviewOrder.pop();
    reviewOrder.unshift(toShift);
  }

  for (let review_no = 0; review_no < totalReviews; review_no++) {
    document.getElementById(`reviewer_image_${review_no}`).src = reviewData[reviewOrder[review_no]].image;

    document.getElementById(`reviewer_name_${review_no}`).textContent = reviewData[reviewOrder[review_no]].name;

    document.getElementById(`reviewer_location_${review_no}`).textContent = reviewData[reviewOrder[review_no]].location;

    document.getElementById(`reviewer_content_${review_no}`).textContent = reviewData[reviewOrder[review_no]].content;
  }
}

function toggleSidebar(boolean) {
  var domeElement = document.getElementsByClassName("sidebar_menu")[0];

  if (boolean === 1) {
    // we fetch the sidebar menu dom element and make it visible
    domeElement.style.width = "100%";
    domeElement.style.boxShadow = "-10px 0px 100px rgba(0, 0, 0, 0.9)";
  } else {
    // we fetch the sidebar menu dom element and make it in-visible
    domeElement.style.width = "0%";
    domeElement.style.boxShadow = "none";
  }
}
