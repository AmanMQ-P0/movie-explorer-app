import { useToast } from '@/context/useToast';

export default function Toast() {
  const { message, hideToast } = useToast();

  if (!message) {
    return null;
  }

  return (
    <div>
      <p>{message}</p>

      <button type='button' onClick={hideToast}>
        Close
      </button>
    </div>
  );
}
