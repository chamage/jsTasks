// -- GDP Growth Simulation Task --
// Simulates GDP growth of Poland and Germany to answer

function GDPSimulation() {
    const startGDP_PL = 14880;          // Poland GDP in 2006
    const startGDP_DE = 33400 * 1.016; // Germany GDP in 2006 (with 1.6% growth) 
    const growth_PL = 1.062;           // 1 + 6.2%
    const growth_DE = 1.016;           // 1 + 1.6%
    const startYear = 2006;

    // --- Question 1: When will Poland's GDP double ---
    let gdp_pl_q1 = startGDP_PL; // Current GDP of Poland
    const goal = startGDP_PL * 2; // Target GDP (double the starting GDP)
    let years_q1 = 0; // Years passed

    while (gdp_pl_q1 < goal) { // Loop until Poland's GDP doubles
        gdp_pl_q1 *= growth_PL; // Increase Poland's GDP by growth rate
        years_q1++; // Increment year count
    }
    

    // --- Question 2: When will Poland's GDP > Germany's GDP ---
    let gdp_pl_q2 = startGDP_PL; // Current GDP of Poland
    let gdp_de_q2 = startGDP_DE; // Current GDP of Germany
    let years_q2 = 0; // Years passed
    
    const MAX_YEARS = 500; // Safety limit to prevent infinite loops

    while (gdp_pl_q2 <= gdp_de_q2 && years_q2 < MAX_YEARS) { // Loop until Poland's GDP surpasses Germany's GDP
        gdp_pl_q2 *= growth_PL; // Increase Poland's GDP by growth rate
        gdp_de_q2 *= growth_DE; // Increase Germany's GDP by growth rate
        years_q2++; // Increment year count
    }

    console.log(`--- TASK 2: GDP ---\n`);
    console.log(`1. GDP of Poland will double after ${years_q1} years (in the year ${startYear + years_q1}).`);
    console.log(`2. Poland's GDP will surpass Germany's GDP after ${years_q2} years (in the year ${startYear + years_q2}).`);
}

GDPSimulation();