function changeText() {
    document.getElementById("dynamic-text").textContent = "🎉 The text has changed!";
  }
  
  function toggleStyle() {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
  }
  
  function addElement() {
    const newEl = document.createElement("p");
    newEl.textContent = "✨ New paragraph added!";
    newEl.id = "new-paragraph";
    document.getElementById("container").appendChild(newEl);
  }
  
  function removeElement() {
    const el = document.getElementById("new-paragraph");
    if (el) {
      el.remove();
    }
  }
 // Fun facts array
const funFacts = [
    "The Eiffel Tower can be 15 cm taller during the summer!",
    "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs!",
    "Bananas are berries, but strawberries aren't!",
    "Octopuses have three hearts!",
    "Cats have fewer toes on their back paws!"
  ];
  
  // Change the fun fact
  function changeFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("fact").textContent = funFacts[randomIndex];
  }
  
  // Toggle day/night mode
  function toggleTheme() {
    document.body.classList.toggle("night-mode");
  }
  
  // Add new activity
  function addActivity() {
    const activityList = document.getElementById("activity-list");
    const newActivity = document.createElement("li");
    newActivity.textContent = "🎨 Creative Drawing";
    activityList.appendChild(newActivity);
  }
  
  // Remove last activity
  function removeActivity() {
    const activityList = document.getElementById("activity-list");
    if (activityList.lastElementChild) {
      activityList.removeChild(activityList.lastElementChild);
    }
  }
   