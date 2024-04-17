


export const generate_user_name = (name) => {
    const id = randomString(4, '0123456789abcdef'); // Generate a 4-character hexadecimal string
    return `${name.slice(0, 5)}${id}`; // Combine the first 5 characters of the name with the ID
}

export const serializeObj = (data) => {
    return structuredClone(data)
}
export const extractYearMonth = (dateString) => {
    if (!dateString) return ''
    // Split the date string into its components
    const parts = dateString.split("-");

    // Extract the year and month
    const year = parts[0];
    const month = parts[1].padStart(2, "0"); // Add leading zero if needed

    // Return the formatted string
    return `${year}-${month}`;
}

const randomString = (length, chars) => {
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};


// Function to calculate completion percentage
function completionPercentage(totalItems, total) {
    return totalItems > 0 ? Math.round((totalItems / total) * 100, 2) : 0;
}



export function calcPercentage(data) {
    const completionData = {};
    for (const key in data) {
        completionData[key] = completionPercentage(data[key].totalItems, data[key].perPage);
    }

    // Determine portfolio completion (heuristic based on certificates, projects and skills)
    const portfolioCompletion = (completionData.certificates + completionData.projects + completionData.skills + completionData.experience) / 3;

    console.log(completionData);
    console.log(`Portfolio Completion: ${portfolioCompletion}% (This is a heuristic calculation based on certificates, projects and skills)`);

    return {
        completionData,
        portfolioCompletion
    }
}