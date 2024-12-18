export function getFormatedDate(dateString: string): string {
  const date = new Date(dateString);

  const day: string = date.getUTCDate().toString().padStart(2, '0');
  const month: string = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year: number = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
