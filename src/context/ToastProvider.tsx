import { useState, type ReactNode } from 'react';
import { ToastContext } from './ToastContext';

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setMessage(message);
  };

  const hideToast = () => {
    setMessage(null);
  };

  return (
    <ToastContext.Provider
      value={{
        message,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
