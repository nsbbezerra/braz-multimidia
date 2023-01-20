import { Check, Hourglass } from "phosphor-react";
import { Fragment } from "react";

interface Props {
  step: string;
}

export default function Steps({ step }: Props) {
  function handleStep(): number {
    switch (step) {
      case "Negociando":
        return 0;
      case "Pagamento":
        return 1;
      case "Arte":
        return 2;
      case "Produção":
        return 3;
      case "Envio":
        return 4;
      default:
        return 1;
    }
  }

  return (
    <Fragment>
      {handleStep() === 0 && (
        <div className="steps-container">
          <div className="steps">
            <span className="step step-inactive">
              <Hourglass />
            </span>
            <div className="step-content">
              <span className="step-title">Negociando</span>
              <span className="step-description">
                Aguardando aprovação do pagamento
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">2</span>
            <div className="step-content">
              <span className="step-title">Aprovação de Arte</span>
              <span className="step-description">
                Aguardando aprovação da arte final
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">3</span>
            <div className="step-content">
              <span className="step-title">Produção</span>
              <span className="step-description">Produzindo o pedido</span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">4</span>
            <div className="step-content">
              <span className="step-title">Envio do pedido</span>
              <span className="step-description">Enviamos seu pedido</span>
            </div>
          </div>
        </div>
      )}
      {handleStep() === 1 && (
        <div className="steps-container">
          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">{step}</span>
              <span className="step-description">
                Aguardando aprovação do pagamento
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">2</span>
            <div className="step-content">
              <span className="step-title">Aprovação de Arte</span>
              <span className="step-description">
                Aguardando aprovação da arte final
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">3</span>
            <div className="step-content">
              <span className="step-title">Produção</span>
              <span className="step-description">Produzindo o pedido</span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">4</span>
            <div className="step-content">
              <span className="step-title">Envio do pedido</span>
              <span className="step-description">Enviamos seu pedido</span>
            </div>
          </div>
        </div>
      )}
      {handleStep() === 2 && (
        <div className="steps-container">
          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">{step}</span>
              <span className="step-description">
                Aguardando aprovação do pagamento
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Aprovação de Arte</span>
              <span className="step-description">
                Aguardando aprovação da arte final
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">3</span>
            <div className="step-content">
              <span className="step-title">Produção</span>
              <span className="step-description">Produzindo o pedido</span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">4</span>
            <div className="step-content">
              <span className="step-title">Envio do pedido</span>
              <span className="step-description">Enviamos seu pedido</span>
            </div>
          </div>
        </div>
      )}
      {handleStep() === 3 && (
        <div className="steps-container">
          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">{step}</span>
              <span className="step-description">
                Aguardando aprovação do pagamento
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Aprovação de Arte</span>
              <span className="step-description">
                Aguardando aprovação da arte final
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Produção</span>
              <span className="step-description">Produzindo o pedido</span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-inactive">4</span>
            <div className="step-content">
              <span className="step-title">Envio do pedido</span>
              <span className="step-description">Enviamos seu pedido</span>
            </div>
          </div>
        </div>
      )}
      {handleStep() === 4 && (
        <div className="steps-container">
          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">{step}</span>
              <span className="step-description">
                Aguardando aprovação do pagamento
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Aprovação de Arte</span>
              <span className="step-description">
                Aguardando aprovação da arte final
              </span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Produção</span>
              <span className="step-description">Produzindo o pedido</span>
            </div>
          </div>

          <div className="steps">
            <span className="step step-active">
              <Check />
            </span>
            <div className="step-content">
              <span className="step-title">Envio do pedido</span>
              <span className="step-description">Enviamos seu pedido</span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
