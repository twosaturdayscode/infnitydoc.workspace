import { Title } from '@src/_ref/title'
import { Accordion } from '@src/components'

export function Faq() {
  return (
    <section className="container flex flex-col gap-10 py-20">
      <div className="flex flex-col justify-center gap-4 text-center">
        <span className="text-lg font-medium text-brand">FAQ</span>
        <Title of="section">Domande frequenti</Title>
      </div>
      <Accordion type="multiple" className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="flex flex-col gap-7">
          <Accordion.Item value="Come funziona la prenotazione online?">
            <Accordion.Trigger>
              Come funziona la prenotazione online?
            </Accordion.Trigger>
            <Accordion.Content>
              <p>
                Scegli il servizio che desideri, seleziona il giorno e l'orario
                che preferisci e procedi con il pagamento. Una volta completato
                il pagamento riceverai una mail di conferma.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="Come posso pagare?">
            <Accordion.Trigger>Come posso pagare?</Accordion.Trigger>
            <Accordion.Content>
              <p>
                Accettiamo pagamenti con carta di credito, PayPal, Apple Pay,
                Google Pay e bonifico bancario.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </div>
        <div className="flex flex-col gap-7">
          <Accordion.Item value="Posso annullare la prenotazione?">
            <Accordion.Trigger>
              Posso annullare la prenotazione?
            </Accordion.Trigger>
            <Accordion.Content>
              <p>
                Puoi annullare la prenotazione fino a 24 ore prima
                dell'appuntamento. Per annullare la prenotazione contattaci via
                mail o telefonicamente.
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="Come posso contattarvi?">
            <Accordion.Trigger>Come posso contattarvi?</Accordion.Trigger>
            <Accordion.Content>
              <p>
                Puoi contattarci via mail all'indirizzo{' '}
                <a
                  href="mailto:info@infinitydoc.it"
                  className="text-brand underline"
                >
                  info@infinitydoc.it
                </a>{' '}
                o telefonicamente al numero{' '}
                <a href="tel:+39000000000" className="text-brand underline">
                  +39 000 000 000
                </a>
                .
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </div>
      </Accordion>
    </section>
  )
}
