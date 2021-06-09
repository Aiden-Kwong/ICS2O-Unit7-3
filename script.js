let userAge = 0

// Detects if the submit button is clicked, if so, runs function runComparison.
document.getElementById('btn').addEventListener('click', runComparison)

// This function determines what movies are appropriate to watch based on the input 'age'.
function runComparison () {
  // Logs user age based on input field and ensures that it is a number.
  userAge = document.getElementById('age').value
  console.log(userAge)
  userAge = parseInt(userAge)

  // If the input isn't a number, do this:
  if (isNaN(userAge)) {
    console.log('NaN')
    
    // Display this error message in red.
    document.getElementById('response').style.color = "#ff0000"
    document.getElementById('response').innerHTML = "Please enter an age using numerical symbols."

  // If the user age is less than 0 or above 200 do this:
  } else if (userAge <= 0 || userAge > 200) {
    console.log('notrealage')

    // Display this error message in red.
    document.getElementById('response').style.color = "#ff0000"
    document.getElementById('response').innerHTML = "Please enter a real age."

  // If none of these conditions are true, do this:
  } else {
    // If the age is 17 or up, display this message in green.
    if (userAge >= 17) {
      console.log('r rated movies')
      document.getElementById('response').style.color = "#274e13"
      document.getElementById('response').innerHTML = "You can watch movies rated up to R, so you can watch any movie."

    // If the age is 13 or up, display this message in green.
    } else if (userAge >= 13) {
      console.log('pg13')
      document.getElementById('response').style.color = "#274e13"
      document.getElementById('response').innerHTML = "You can watch movies rated up to PG-13."

    // If the age is 5 or up, display this message in green.
    } else if (userAge >= 5) {
      console.log('g or pg')
      document.getElementById('response').style.color = "#274e13"
      document.getElementById('response').innerHTML = "You can watch movies rated G or PG."

    // If the age is less than 5, display this message in green.
    } else {
      console.log('too young.')
      document.getElementById('response').style.color = "#274e13"
      document.getElementById('response').innerHTML = "You’re too young to watch most movies."
    }
   
  }
}
