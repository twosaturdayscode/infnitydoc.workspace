import type { LucideProps } from 'lucide-react'
import {
  CheckCircleIcon,
  HeartPulseIcon,
  ShieldPlusIcon,
  StethoscopeIcon,
} from 'lucide-react'

export const cards = [
  {
    title: 'Consulti immediati',
    description:
      'Puoi parlare con un medico generico o specialista in video o per telefono 24 ore su 24, 7 giorni su 7. Senza attese, senza file, ovunque tu sia.',
    icon: (ps: LucideProps) => <StethoscopeIcon {...ps} />,
  },
  {
    title: 'Check-up salute',
    description:
      'Valuta il tuo stato di salute in real time senza dover utilizzare nessun device!',
    icon: (ps: LucideProps) => <CheckCircleIcon {...ps} />,
  },
  {
    title: 'Storia medica',
    description:
      'La tua storia medica racchiusa in app e sempre disponibile. Un posto unico per lo storico delle misurazioni, i report clinici e i risultati degli esami.',
    icon: (ps: LucideProps) => <HeartPulseIcon {...ps} />,
  },
  {
    title: 'Misurazioni e alert',
    description:
      'La tua storia medica racchiusa in app e sempre disponibile. Un posto unico per lo storico delle misurazioni, i report clinici e i risultati degli esami.',
    icon: (ps: LucideProps) => <ShieldPlusIcon {...ps} />,
  },
]

export const reasons = [
  'Accessibile da smartphone, tablet e pc',
  'Televisite e videovisite 24 / 7',
  'Misurazioni, check salute e alert medico',
  'Storia medica sempre con te',
]

export const plans = [
  {
    title: 'Standard',
    price: '€15',
    description: 'Per le esigenze di base',
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
    price: '€25',
    description: 'Per una totale sicurezza',
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
    price: '€35',
    description: 'Per te e la tua famiglia',
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
