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

export const treatments = [
  'Tosse, raffreddore, febbre',
  'Infezioni del tratto urinario',
  'Intossicazione alimentare, diarrea',
  'Occhio rosa',
  'Mal di gola, mal di gola',
  "Infezioni sinusali, dolore all'orecchio",
  'Infezioni da lieviti vaginali',
  'Vaginosi batterica',
  'Ipotiroidismo',
  'Ordine di laboratorio per le malattie sessualmente trasmissibili',
  'Ricariche di prescrizione',
  'Eruzione cutanea ed eczema',
  'Punture di insetti, infezioni della pelle',
  'Asma',
  'Reflusso acido',
  'Acne',
  'Disfunzione erettile',
  'Herpes genitale',
  'Herpes labiale',
  'Gotta',
]

export const plans = [
  {
    title: 'Standard',
    price: '€15',
    description: 'Per le esigenze di base',
    features: [
      '10 video/tele consulti 24/7',
      '5 Visite ambulatoriali',
      '1 check up salute ',
      '1 Visite domiciliari con costo agevolato',
      '1 Prenotazione consulenza specialistica a costo agevolato. (Fino a 15 di sconto)',
      '1 certificato gratuito ',
    ],
    highlights: [
      'Early access alla nostra app e telemetry sanitaria',
      'Massimo di 2 famigliari',
    ],
    footnotes: ['n° di prestazioni incluse per anno'],
  },
  {
    title: 'Premium',
    price: '€25',
    description: 'Per una totale sicurezza',
    features: [
      '20 video/tele consulti 24/7',
      '10 Visite ambulatoriali',
      '2 check up salute',
      '2 Visite domiciliari con costo agevolato',
      '3 Prenotazioni visite specialistiche a costo agevolato (fino a 15 di sconto)',
      '2 certificate medici gratuiti (escluso cert. di invalidita) ',
    ],
    highlights: [
      'Early access alla nostra app e telemetry sanitaria',
      'Massimo di 4 famigliari',
    ],
    footnotes: ['n° di prestazioni incluse per anno'],
  },
  {
    title: 'Family',
    price: '€35',
    description: 'Per te e la tua famiglia',
    features: [
      'Illimitate video/tele consulti 24/7',
      '15 Visite ambulatoriali annuali',
      '4 check up salute',
      '3 Visite domiciliari con costo agevolato',
      '5 Prenotazioni visite specialistiche a costo agevolato',
      '3 certificati medici gratuiti (escluso cert di invalidita)',
    ],
    highlights: [
      'Early access alla nostra app e telemetry sanitaria',
      'Massimo di 6 famigliari',
    ],
    footnotes: ['n° di prestazioni incluse per anno'],
  },
]
