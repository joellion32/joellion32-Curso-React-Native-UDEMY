/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unanthenticated' | 'checking';
    token?: string;
    user?: {
        name: string,
        email: string
    }

    login: (email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, _password: string) => {
        set({
            status: 'authenticated',
            token: 'ABC1234',
            user: {
                name: 'John Doe',
                email: email
            }
        })
    },

    logout: () => {
        set({
            status: 'unanthenticated',
            token: undefined,
            user: undefined
        })
    }
})
);