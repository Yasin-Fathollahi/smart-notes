export function dateSplitter(date: Date) {
  const formatDate = Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  }).format;

  const formattedDate = formatDate(date);
  const dateArray = formattedDate.replace(',', '').split(' ');

  const dateObj = {
    dayOfWeek: dateArray[0],
    month: dateArray[1],
    dayOfMonth: dateArray[2],
  };

  return dateObj;
}
