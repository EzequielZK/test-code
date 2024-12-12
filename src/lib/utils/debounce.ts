export default function debounce(callback: () => void, delay: number) {
  let timeout: NodeJS.Timeout;

  return () => {
    clearTimeout(timeout);
    console.log("asdfsad");
    timeout = setTimeout(callback, delay);
  };
}
