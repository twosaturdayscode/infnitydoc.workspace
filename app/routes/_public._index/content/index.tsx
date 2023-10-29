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
    icon: () => <StethoscopeIcon className="w-16 h-16 text-brand" />,
  },
  {
    title: 'Check-up salute',
    description:
      'Valuta il tuo stato di salute in real time senza dover utilizzare nessun device!',
    icon: () => <CheckCircleIcon className="w-16 h-16 text-brand" />,
  },
  {
    title: 'Storia medica',
    description:
      'La tua storia medica racchiusa in app e sempre disponibile. Un posto unico per lo storico delle misurazioni, i report clinici e i risultati degli esami.',
    icon: () => <HeartPulseIcon className="w-16 h-16 text-brand" />,
  },
  {
    title: 'Misurazioni e alert',
    description:
      'La tua storia medica racchiusa in app e sempre disponibile. Un posto unico per lo storico delle misurazioni, i report clinici e i risultati degli esami.',
    icon: () => <ShieldPlusIcon className="w-16 h-16 text-brand" />,
  },
]

export const reasons = [
  'Accessibile da smartphone, tablet e pc',
  'Televisite e videovisite 24 / 7',
  'Misurazioni, check salute e alert medico',
  'Storia medica sempre con te',
]
