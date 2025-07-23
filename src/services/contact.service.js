class ContactService {
    baseUrl = "http://localhost:31299/api/contacts";

    async getContacts() {
        try {
            const response = await fetch(this.baseUrl);
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }

}

export const contactService = new ContactService();
