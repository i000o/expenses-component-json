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

        const dayNames = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']; 
        const today = dayNames[new Date().getDay()]; 

        expenses.forEach(day => { 
            const amount = day.amount; 
            const amountBar = document.createElement('div'); 
            amountBar.classList.add('bar'); 

            if (day.day === today) { 
                amountBar.classList.add('bar-today'); 
            }

            amountBar.style.height = `${(amount / maxAmount) * 100}%`; 
            chartContainer.appendChild(amountBar); 
        })
    }
}) 