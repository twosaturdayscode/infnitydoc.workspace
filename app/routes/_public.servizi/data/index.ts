export interface Plan {
  title: string
  price: number
  description: string
  features: string[]
}

export const plans = [
  {
    title: 'Standard',
    price: 15,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
    features: [
      "Disponibilità tutto l'anno 24/7",
      '24 sessioni check salute',
      'Accesso da app e da pc',
      'Televisite e videovisite con medico generico illimitate',
      '24 sessioni Check Salute',
    ],
  },
  {
    title: 'Premium',
    price: 25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
    features: [
      "Disponibilità tutto l'anno 24/7",
      '24 sessioni check salute',
      'Accesso da app e da pc',
      'Televisite e videovisite con medico generico illimitate',
      '24 sessioni Check Salute',
      'Monitoraggio dei parametri vitali illimitato',
      'Storia medica online illimitata',
    ],
  },
  {
    title: 'Family',
    price: 35,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.',
    features: [
      "Disponibilità tutto l'anno 24/7",
      '24 sessioni check salute',
      'Accesso da app e da pc',
      'Televisite e videovisite con medico generico illimitate',
      '24 sessioni Check Salute',
      'Monitoraggio dei parametri vitali illimitato',
      'Storia medica online illimitata',
      'Prenotazione e accesso al network convenzionato illimitato',
      'Cerca farmaco e trova farmacie illimitato',
    ],
  },
]

export const serviceNotes = [
  {
    note: 'Televisite e videovisite 24 / 7',
    image: '/assets/teleconsultation.jpg',
  },
  { note: 'Accesso in ambulatorio', image: '/assets/chest-patient.jpg' },
  { note: 'Rinvio a specialisti se necessario', image: '/assets/ct-scan.jpg' },
  { note: 'Check-up salute annuale', image: '/assets/preparation-blood.jpg' },
  { note: 'Prescrizione farmaceutiche', image: '/assets/pharmacist.jpg' },
]
