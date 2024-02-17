// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`../languages/${lang}.json`);
    return response.json();
  }
  
  // Function to set the language preference
  function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
  }
  
  // Function to update content based on selected language
  function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = langData[key];
    });
  }
  
  // Function to change language
  async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);

    //
  }
  
  // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    toggleArabicStylesheet(userPreferredLanguage);
  });
  
// doughnut chart
  var chrt = document.getElementById("chartId") .getContext('2d');
  var chartId = new Chart(chrt, {
	 type: 'doughnut',
	 data: {
	   labels: ["Owners", "Marketing", "Burning", "Community", "Development"],
	   datasets: [{
		 label: "Billy Coin Tokenomics",
		 data: [5, 5, 10, 65, 15],
		 backgroundColor: ['gold', 'green', 'red', 'blue', 'lightgreen'], 
	   }],
	 },
	 options: {
	   maintainAspectRatio: false,
	   cutoutPercentage: 65,
	   responsive: true,
	   plugins: {
		 legend: {
		   position: 'top',
		 },
		 title: {
		   display: true,
		   color: 'white',
		   text: 'Total Supply 1,000,000,000'
		 }
	   }
   },
 });