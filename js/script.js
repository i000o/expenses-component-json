document.addEventListener("DOMContentLoaded", () => { 

    async function populate() { 

        const response = await fetch('./data.json'); 
        const expenses = await response.json(); 

        console.log(expenses); 

        populateChart(expenses); I
    }

    populate(); 

    function populateChart(expenses) { 

        const maxAmount = Math.max(...expenses.map(day => day.amount)); 
        const chartContainer = document.getElementById('chart'); 

        expenses.forEach(day => { 
            const amount = day.amount; 
            const amountBar = document.createElement('div'); 
            amountBar.classList.add('bar'); 
            amountBar.style.height = `${(amount / maxAmount) * 100}%`; 

            chartContainer.appendChild(amountBar); 
        })
    }

}) 