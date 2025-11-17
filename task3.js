// -- Outbreak Simulation Task--
// Simulates the spread of a disease in a population

function outbreakSimulation() {
    const POPULATION = 10000; // Total population
    const DISEASE_PERIOD = 14; // Days
    const INFECTION_RATE = 2; // How many people one sick person infects daily

    let healthy = POPULATION - 1; // Susceptible to infection
    let immune = 0; // Recovered and immune individuals
    
    let sickInCycle = new Array(DISEASE_PERIOD).fill(0); // Track sick individuals by day of illness
    sickInCycle[0] = 1; // Patient zero

    let day = 1; // Current day of the outbreak
    let maxSick = 1; // Maximum number of sick individuals at peak
    let peakDay = 1; // Day when the outbreak peaks
    let noSusceptibleDay = -1; // Day when no susceptible individuals remain

    console.log(`--- Task 3: Outbreak (Population: ${POPULATION}) ---`);
    
    while (true) { // Daily simulation loop
        console.log(`Day ${day}: Healthy: ${healthy}, Sick: ${sickInCycle.reduce((a, b) => a + b, 0)}, Immune: ${immune}`); // Log current state
        const totalSick = sickInCycle.reduce((a, b) => a + b, 0); // Total sick individuals

        if (totalSick > maxSick) { // Check if current sick count is a new peak
            maxSick = totalSick; // Update maximum sick count
            peakDay = day; // Update peak day
        }

        if (totalSick === 0 && healthy === 0) { // End condition: no sick or healthy individuals
            console.log(`\nEND: The outbreak completely subsided on day ${day - 1}.`); 
            break;
        }

        const newImmune = sickInCycle[DISEASE_PERIOD - 1]; // Individuals recovering today
        immune += newImmune; // Update immune count

        for (let i = DISEASE_PERIOD - 1; i > 0; i--) { // Shift sick individuals down the cycle
            sickInCycle[i] = sickInCycle[i - 1]; // Move each day's sick count to the next day
        }

        const potentialInfections = totalSick * INFECTION_RATE; // New infections caused by current sick individuals
        const newInfections = Math.min(potentialInfections, healthy); // Limit new infections to remaining healthy individuals
        sickInCycle[0] = newInfections; // Update sick count for the new day
        healthy -= newInfections; // Decrease healthy count by new infections

        if (healthy === 0 && noSusceptibleDay === -1) { // Check if no susceptible individuals remain
            noSusceptibleDay = day; // Record the day when no susceptible individuals remain
        }

        day++; // Move to the next day
    }

    console.log(`\n--- Outbreak Summary ---`);
    console.log(`1. Peak of the outbreak: ${maxSick} sick individuals (on day ${peakDay}).`);
    console.log(`2. The outbreak subsided (no susceptible individuals) on day: ${noSusceptibleDay}.`);
}

outbreakSimulation();