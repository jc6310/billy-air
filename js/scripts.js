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
  
  // Function to toggle Arabic stylesheet based on language selection
function toggleArabicStylesheet(lang) {
    const head = document.querySelector('head');
    const link = document.querySelector('#styles-link');

    if (link) {
        // head.removeChild(link); // Remove the old stylesheet link
    } else if (lang === 'ar') {
         const newLink = document.createElement('link');
        newLink.id = 'styles-link';
        newLink.rel = 'stylesheet';
        // newLink.href = './assets/css/style-ar.css'; // Path to Arabic stylesheet
        // head.appendChild(newLink);
    }
}
  // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
      
    const langs = navigator.languages; 
    const available_langs = ['en','pt', 'es'];
    var selected_lang = "en";
    var skip = false
    
    available_langs.forEach(function (item, index) {
        console.log(item, index);
        for (let i = 0; i < langs.length; i++) {
            if(langs[i].startsWith(item) && skip == false)
                selected_lang = item;
                skip = true
        }
    });

    const userPreferredLanguage = localStorage.getItem('language') || selected_lang;
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    // toggleArabicStylesheet(userPreferredLanguage);
  });
  
// doughnut chart
  var chrt = document.getElementById("chartId") .getContext('2d');
  var chartId = new Chart(chrt, {
	 type: 'doughnut',
	 data: {
	   labels: ["Founders", "Dev & Marketing", "Liquidity Pool", "Public Sale", "To Be Burned"],
	   datasets: [{
		 label: "Billy Coin Tokenomics",
		 data: [20, 5, 10, 35, 30],
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
        labels: {
          color: "white", 
          font: {
            size: 18
          }
        }
		 },
		 title: {
		   display: true,
		   color: 'white',
		   text: 'Total Supply 150,000,000,000'
		 }
	   }
   },
 });
