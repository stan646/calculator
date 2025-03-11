const display = document.getElementById('display');
const answer = document.getElementById('answer');

const appendElement = (input) =>
{
    const show = display.value += input;
    
}

// const updateDisplay = () => {
//   display.value = Number(display.value).toLocaleString(); // Formats with commas
// };


const calculate = () =>
{
  try {
    const x = answer.value = eval(display.value); // Calculate expression
    // updateDisplay(); // Format number
} catch (error) {
    answer.value = "Error";
}
}

const clearInput = () =>
{
  
    display.value = display.value.slice(0, -1); // Removes last character
};

const AC = () => 
{
  display.value = "";
  answer.value = "";
}

