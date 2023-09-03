// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the product name from the search input
    const searchInput = document.getElementById('search-input');
    const productName = searchInput.value.trim();
  
    // Clear the search input
    searchInput.value = '';
  
    // Make API requests to retrieve data
    // Replace 'apiEndpoint' with the actual API endpoint URL
    const apiEndpoint = 'https://api.example.com/search?product=' + productName;
  
    // Use fetch or any other library to make the API request
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Update the price chart
        updatePriceChart(data.priceChart);
  
        // Update the price history
        updatePriceHistory(data.priceHistory);
  
        // Update the upcoming discounts
        updateUpcomingDiscounts(data.upcomingDiscounts);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error, show an error message, etc.
      });
  }
  
  // Function to update the price chart
  function updatePriceChart(priceChartData) {
    const priceChartSection = document.getElementById('price-chart');
  
    // Clear the price chart section
    priceChartSection.innerHTML = '';
  
    if (priceChartData.length > 0) {
      const table = document.createElement('table');
      const tableHeader = document.createElement('tr');
      const headers = ['Website', 'Price'];
  
      // Create table headers
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        tableHeader.appendChild(th);
      });
  
      table.appendChild(tableHeader);
  
      // Create table rows with website and price data
      priceChartData.forEach(data => {
        const row = document.createElement('tr');
        const websiteCell = document.createElement('td');
        websiteCell.textContent = data.website;
        const priceCell = document.createElement('td');
        priceCell.textContent = data.price;
  
        row.appendChild(websiteCell);
        row.appendChild(priceCell);
  
        table.appendChild(row);
      });
  
      priceChartSection.appendChild(table);
    } else {
      // Display a message if no price data is available
      priceChartSection.textContent = 'No price data available.';
    }
  }
  
  // Function to update the price history
  function updatePriceHistory(priceHistoryData) {
    const priceHistorySection = document.getElementById('price-history');
  
    // Clear the price history section
    priceHistorySection.innerHTML = '';
  
    if (priceHistoryData.length > 0) {
      const ul = document.createElement('ul');
  
      // Create list items with price history data
      priceHistoryData.forEach(price => {
        const li = document.createElement('li');
        li.textContent = price;
  
        ul.appendChild(li);
      });
  
      priceHistorySection.appendChild(ul);
    } else {
      // Display a message if no price history data is available
      priceHistorySection.textContent = 'No price history data available.';
    }
  }
  
  // Function to update the upcoming discounts
  function updateUpcomingDiscounts(upcomingDiscountsData) {
    const upcomingDiscountsSection = document.getElementById('upcoming-discounts');
  
    // Clear the upcoming discounts section
    upcomingDiscountsSection.innerHTML = '';
  
    if (upcomingDiscountsData.length > 0) {
      // Create coupons with discount details
      upcomingDiscountsData.forEach(discount => {
        const coupon = document.createElement('div');
        coupon.classList.add('coupon');
        coupon.textContent = discount;
  
  