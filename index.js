const container = document.querySelector(".data-container");

// getting buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

generatebars();

// eventListener
button1.addEventListener("click", () => {
  window.location.reload();
});

button2.addEventListener("click", () => {
  SelectionSort();
  disableAllButtons();
});
button3.addEventListener("click", () => {
  BubbleSort();
  disableAllButtons();
});
button4.addEventListener("click", () => {
  InsertionSort();
  disableAllButtons();
});

/**
 * Functions
 */

// function to generate bars
function generatebars(num = 20) {
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${value * 3}px`;

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i++) {
    // Assign i to min_idx
    min_idx = i;
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await pause();

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    // To swap ith and (min_idx)th bar
    swap(bars, min_idx, i);

    // To pause the execution of code for 300 milliseconds
    await pause();

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  enableAllButtons();
}

async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length; i++) {
    for (let j = 1; j < bars.length - i; j++) {
      console.log(j);

      // provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "yellow";
      // provide Yellow color to the (j-1)th bar
      bars[j - 1].style.backgroundColor = "yellow";

      await pause();

      // To store the integer value of jth bar to var1
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (j-1)th bar to var2
      var val2 = parseInt(bars[j - 1].childNodes[0].innerHTML);

      if (val1 > val2) {
        // skyblue color
        bars[j].style.backgroundColor = "rgb(24, 190, 255)";
        bars[j - 1].style.backgroundColor = "rgb(24, 190, 255)";
      }

      if (val1 < val2) {
        swap(bars, j, j - 1);
        await pause();
      }

      bars[j].style.backgroundColor = "green";
      bars[j - 1].style.backgroundColor = "rgb(24, 190, 255)";
    }
    bars[0].style.backgroundColor = "green";
  }

  enableAllButtons();
}

async function InsertionSort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 1; i < bars.length; i++) {
    let current = parseInt(bars[i].childNodes[0].innerText);
    let currentBar = bars[i].style.height;
    bars[i].style.backgroundColor = "darkblue";

    await pause();

    let j = i - 1;

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerText) > current) {
      bars[j].style.backgroundColor = "yellow";

      await pause();

      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].style.backgroundColor = "green";
      j--;

      await pause();
    }

    bars[j + 1].style.height = currentBar;
    bars[j + 1].childNodes[0].innerText = current;
    bars[j + 1].style.backgroundColor = "green";
  }

  enableAllButtons();
}

// function to pause the code execution
async function pause() {
  await new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 100),
  );
}

function swap(array, indexOne, indexTwo) {
  var temp1 = array[indexOne].style.height;
  var temp2 = array[indexOne].childNodes[0].innerText;
  array[indexOne].style.height = array[indexTwo].style.height;
  array[indexTwo].style.height = temp1;
  array[indexOne].childNodes[0].innerText =
    array[indexTwo].childNodes[0].innerText;
  array[indexTwo].childNodes[0].innerText = temp2;
}

// function to disable the button
function disableAllButtons() {
  // To disable the button "Generate New Array"
  button1.disabled = true;
  button1.style.backgroundColor = "#d8b6ff";

  // To disable the button "Selection Sort"
  button2.disabled = true;
  button2.style.backgroundColor = "#d8b6ff";

  // To disable the button "Bubble Sort"
  button3.disabled = true;
  button3.style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  button4.disabled = true;
  button4.style.backgroundColor = "#d8b6ff";
}

function enableAllButtons() {
  // To enable the button "Generate New Array" after final(sorted)
  button1.disabled = false;
  button1.style.backgroundColor = "#6f459e";

  // To enable the button "Selection Sort" after final(sorted)
  button2.disabled = false;
  button2.style.backgroundColor = "#6f459e";

  // To enable the button "Selection Sort" after final(sorted)
  button3.disabled = false;
  button3.style.backgroundColor = "#6f459e";

  // To enable the button "Insertion Sort" after final(sorted)
  button4.disabled = false;
  button4.style.backgroundColor = "#6f459e";
}
