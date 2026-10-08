import { createContext } from 'react';

interface ToastContextValue {
  message: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
