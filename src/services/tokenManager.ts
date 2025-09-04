// Manages token storage in localStorage for authentication.
export const TokenManager = {
  save: (token:string) => {
    try {
      localStorage.setItem('token', token);
    } catch (e) {
      console.error('Failed to save token to localStorage.', e);
    }
  },
  load: () => {
    try {
      return localStorage.getItem('token');
    } catch (e) {
      console.error('Failed to load token from localStorage.', e);
      return null;
    }
  },
  delete: () => {
    try {
      localStorage.removeItem('token');
    } catch (e) {
      console.error('Failed to delete token from localStorage.', e);
    }
  }
};