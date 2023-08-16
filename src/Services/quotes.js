import api from './apiConfig';

// Function to get all quotes
export const getQuotes = async () => {
    try {
        const response = await api.get('/quotes');
        return response.data;
    } catch (error) {
        console.log("Error getting quotes", error)
    }
};

// Function to get individual quote
export const getQuote = async (id) => {
    try {
        const response = await api.get(`/quotes/${quote}`);
        return response.data;
    } catch (error) {
        console.log("Error getting joke", error)
    }
};

// Function to create a quote
export const createQuote = async (joke) => {
    try {
        const response = await api.post('/quotes', joke);
        return response.data;
    } catch (error) {
        console.log("Error creating joke", error)
    }
}

// Function to update a quote
export const updateQuote = async (id, quote) => {
    try {
        const response = await api.put(`/quotes/${quote}`, quote);
        return response.data;
    } catch (error) {
        console.log("Error updating quote", error)
    }
};

// Function to delete a quote
export const deleteQuote = async (id) => {
    try {
        const response = await api.delete(`/quotes/${quote}`);
        return response.data;
    } catch (error) {
        console.log("Error deleting quote", error)
    }
};
