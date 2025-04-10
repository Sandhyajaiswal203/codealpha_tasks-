document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
  
    if (isNaN(dob)) {
      document.getElementById("result").innerText = "Please select a valid date!";
      return;
    }
  
    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();
  
    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }
  
    document.getElementById("result").innerText = `You are ${age} years old.`;
  });
  