export default function formatAmount(amount: number) {
  const formated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
  return formated
}
