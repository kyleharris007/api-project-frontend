import api from './apiConfig';

// Function to get all quotes
export const getQuotes = async () => {
    try {
        const response = await api.get(`/quotes`);
        return response.data;
    } catch (error) {
        console.log("Error getting quotes", error)
    }
};

// Function to get individual quote
export const getQuote = async (id) => {
    try {
        const response = await api.get(`/quotes/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error getting quote", error)
    }
};

// Function to create a quote
export const createQuote = async (quote) => {
    try {
        const response = await api.post(`/quotes`);
        return response.data;
    } catch (error) {
        console.log("Error creating quote", error)
    }
}

// Function to update a quote
export const updateQuote = async (id, quote) => {
    try {
        const response = await api.put(`/quotes`);
        return response.data;
    } catch (error) {
        console.log("Error updating quote", error)
    }
};

// Function to delete a quote
export const deleteQuote = async (id) => {
    try {
        const response = await api.delete(`/quotes`);
        return response.data;
    } catch (error) {
        console.log("Error deleting quote", error)
    }
};
