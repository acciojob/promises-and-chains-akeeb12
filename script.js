
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  if (!age || !name) {
    alert("Please fill out both fields.");
    return;
  }


  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
  .then(() => {
    alert(`Welcome, ${name}. You can vote.`);
  })
  .catch(() => {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  });
});