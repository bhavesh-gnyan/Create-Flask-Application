export class PaginatorService {
    constructor() {}
    
    /**
     * Get the total number of pages based on the given data and items per page.
     * @param data - The array containing all the data to be paginated.
     * @param itemsPerPage - Number of items displayed per page.
     */
    getTotalPages(data: any[], itemsPerPage: number): number {
        return Math.ceil(data.length / (itemsPerPage || 1)); // If no value is provided for 'itemsPerPage', default to 1 item per page.
    }
}