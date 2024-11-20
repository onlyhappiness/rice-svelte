export async function get_json() {
    try {
        const url = ``
        const response = await fetch(url).then((r) => r.json());
        return response
    } catch (error) {
        console.error('Error fetching data: ', error)
        throw error
    }
}
