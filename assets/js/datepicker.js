
  // Get the input fields and the calendar icon
  const dateInputField = document.getElementById('datepicker');
  const timeInputField = document.getElementById('timepicker');
  
  // Function to set current date and time when the input fields are clicked
  if(dateInputField) {
    dateInputField.addEventListener('click', function() {
      this.type = 'date';
      this.focus();
  });
  }
 
  if(timeInputField) {
    timeInputField.addEventListener('click', function() {
      this.type = 'time';
      this.focus();
  });
  }

  
  // If the user manually enters a date or time, change the input type to text
if(dateInputField) {
  dateInputField.addEventListener('change', function() {
    if (this.value !== '') {
        this.type = 'text';
    }
});

}

if(timeInputField) {
  timeInputField.addEventListener('change', function() {
    if (this.value !== '') {
        this.type = 'text';
    }
});
}
  
  /*--------------------------------------------------------------
    DATE AND TIMEPICKER SECTION JS INIT
    --------------------------------------------------------------*/


