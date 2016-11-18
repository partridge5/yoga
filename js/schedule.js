/*switch code for instructor schedule*/

function checkSchedule() {
  var text;
  var instructors = document.getElementById("selectInstructor").value;

  switch(instructors) {
    
    case "1":
      text = "Mondays & Tuesdays at 11AM";
      break;
      
    case "2":
      text = "Friday & Saturday at 4PM";
      break;
      
    case "3":
      text = "Wednesdays at 7PM";
      break;
      
    case "4":
      text = "Thursday & Friday at 7AM";
      break;
      
    case "5":
      text = "Friday & Saturday at 6PM";
      break;
      
      case "6":
      text = "Saturdays at 10AM";
      break;
   
    default:
      text = "Please type again";
  }
  document.getElementById("weekly-schedule").innerHTML = text;
}