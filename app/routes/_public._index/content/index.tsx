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
