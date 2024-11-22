export function formatDateFromString(stringDate: string): string {
    const date = new Date (stringDate)

    return new Intl.DateTimeFormat('fr-CH', {
        month: '2-digit',
        year: 'numeric',
    }).format(date)
}
