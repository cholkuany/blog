import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: {dateString: string} ) {
  const date = parseISO(dateString);
  return <time dateTime={dateString.toUpperCase()}>{format(date, 'LLL d, yyyy')}</time>;
}
