type InvoiceType = {
  id: number
  date: string
  amount: string
  status: string
}

export const invoiceHistory: InvoiceType[] = [
  {
    id: 254684,
    date: '29 Aug 2022',
    amount: '3,999',
    status: 'paid'
  },
  {
    id: 158468,
    date: '02 Sep 2022',
    amount: '3,000',
    status: 'pending'
  },
  {
    id: 245778,
    date: '05 Sep 2022',
    amount: '4,258',
    status: 'paid'
  },
  {
    id: 245778,
    date: '07 Sep 2022',
    amount: '1,225',
    status: 'cancelled'
  },
  {
    id: 254896,
    date: '10 Sep 2022',
    amount: '2,588',
    status: 'paid'
  }
]
