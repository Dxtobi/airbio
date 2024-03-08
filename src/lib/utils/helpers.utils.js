const { randomBytes } = await import('node:crypto')
export const serializeObj = (data) => {
    return structuredClone(data)
}


export const generate_user_name = (name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0, 5)}${id}`
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