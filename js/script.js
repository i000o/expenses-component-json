document.addEventListener("DOMContentLoaded", () => { 

    async function populate() { 

        const response = await fetch('./data.json'); 
        const expenses = await response.json(); 

        populateChart(expenses); 
    }

    populate(); 

    function populateChart(expenses) { 

        const maxAmount = Math.max(...expenses.map(day => day.amount)); 
        const chartContainer = document.getElementById('chart'); 

        const dayNames = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']; 
        const today = dayNames[new Date().getDay()]; 

        expenses.forEach(day => { 
            const amount = day.amount; 
            const amountBar = document.createElement('div'); 
            amountBar.classList.add('bar'); 
            amountBar.style.height = `${(amount / maxAmount) * 100}%`; 

            const tooltip = document.createElement('span'); 
            tooltip.classList.add('bar-tooltip'); 
            tooltip.textContent = `$${amount.toFixed(2)}`; 
            amountBar.appendChild(tooltip); 
            
            if (day.day === today) { 
                amountBar.classList.add('bar-today'); 
            }

            chartContainer.appendChild(amountBar); 
        })
    }
}) 