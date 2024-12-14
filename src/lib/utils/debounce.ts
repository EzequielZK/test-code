export default function debounce(callback: () => void, delay: number) {
  let timeout: NodeJS.Timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}
