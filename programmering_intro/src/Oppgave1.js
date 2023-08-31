
/*navnet er A og det vil bli sent ned til <A />*/
function A() {
    return (
    <div>
        <h2> (Deloppgave A) </h2>
        <p>hva skriver du i javascript dersom du vil gi variabelen text verdien 8?</p>
        <p>hvilken datatype er dette?</p>
    </div>
    );
  }

/*navnet er A og det vil bli sent ned til <A />*/
function B() {
    return (
        <div>
        <h2> (Deloppgave B) </h2>
        <p>Hva skriver du dersom du vil gi variabelen text verdien "textverdi"?</p>
        <p>Hvilken datatype er dette?</p>
    </div>
    );
  }
/*navnet er A og det vil bli sent ned til <A />*/
function C() {
    return (
        <div>
        <h2> (Deloppgave C) </h2>
        <p>Hva skriver du dersom du vil regne ut 2 * 3 ig sette resultatet inn i variabelen produkt?</p>
    </div>
    );
  }
/*navnet er A og det vil bli sent ned til <A />*/
function D() {
    return (
        <div>
        <h2> (Deloppgave D) </h2>
        <p>Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette resultatet inn i variabelen broej? (Det kan være lurt å unngå skandinaviske bokstaver som æ, ø, å i variabelnavn.)</p>
    </div>
    );
  }
function E() {
    return (
        <div>
        <h2>(Deloppgave E)</h2>
        <p>lag et program der du tester om alle kommandoene over fungerer ved å bruke console.log() til å skrive ut innholdet av variablene.</p>
        </div>
    )
}
  
  export default function Oppgave1() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <A />
        <B />
        <C />
        <D />
        <E />
      </div>
    );
  }
  