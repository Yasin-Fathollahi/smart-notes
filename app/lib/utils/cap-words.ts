export default function capitalizeEachWord(text: string) {
  const capitalizedWords = text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  return capitalizedWords;
}
