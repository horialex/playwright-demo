
import { v4 as uuidv4 } from 'uuid';
export class GeneralApi {

    protected buildApiUrl(path: string): string {
        return `${process.env.BASE_URL}${path}?key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`;
    }

    async get(path: string): Promise<Response> {
        const apiUrl = this.buildApiUrl(path);
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        return response;
    }

    async post(path: string, data: any): Promise<Response> {
        const apiUrl = this.buildApiUrl(path);
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async delete(path: string): Promise<Response> {
        const apiUrl = this.buildApiUrl(path);
        const response = await fetch(apiUrl, {
            method: 'DELETE',
        });
        return response;
    }
}