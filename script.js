document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.content-block');

    if (contentBlocks.length === 0) {
        console.warn("No elements with class 'content-block' found.");
        return;
    }

    contentBlocks.forEach((block, index) => {
        // Populate Year
        const year = block.dataset.year;
        const yearDisplay = block.querySelector('.year-display');
        
        if (yearDisplay) {
            if (year) {
                yearDisplay.textContent = year;
            } else {
                // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing data-year attribute.`);
                // yearDisplay.textContent = 'N/A'; // Or leave blank
            }
        } else {
            // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing .year-display element.`);
        }

        // Populate Rank
        const rankNumber = block.dataset.rankLarge; // Gets the number like "53"
        const rankChangeText = block.dataset.rankSmall; // Gets the text like "down 24"
        
        const rankDisplayLarge = block.querySelector('.rank-display-large');
        const rankDisplaySmall = block.querySelector('.rank-display-small');

        if (rankDisplayLarge) {
            if (rankNumber) {
                rankDisplayLarge.textContent = `Ranking: ${rankNumber}`; // Adds "Ranking: " prefix
            } else {
                // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing data-rank-large attribute.`);
                // rankDisplayLarge.textContent = 'Ranking: N/A'; // Or leave blank
            }
        } else {
            // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing .rank-display-large element.`);
        }
        
        if (rankDisplaySmall) {
            if (rankChangeText) {
                rankDisplaySmall.textContent = rankChangeText; // Uses the descriptive text directly
            } else {
                // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing data-rank-small attribute.`);
                // rankDisplaySmall.textContent = ''; // Or leave blank
            }
        } else {
            // console.warn(`Block ${index + 1} (ID: ${block.id || 'N/A'}) is missing .rank-display-small element.`);
        }
    });
});