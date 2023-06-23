export function formatDate(dateString: string): string {
    const parts = dateString.split('-');
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);

    // Create a new Date object
    const date = new Date(year, month - 1, day);

    // Format the date to "Month day, year" format
    const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    return formattedDate;
}

export async function shareWebsite(data: ShareData) {
    await navigator.share(data)
        .then(() => {
            console.log("Share success.");
        })
        .catch((err) => {
            console.log(err.code, err.message);
        })
}