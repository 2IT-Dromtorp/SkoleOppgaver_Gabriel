/*navnet er A og det vil bli sent ned til <A />*/
function A() {  
    return (
    <div>
        <h2> (Deloppgave A) </h2>
        <p>hva skriver du i javascript dersom du vil gi variabelen text verdien 8?</p>
        <p>hvilken datatype er dette?</p>
        <p>Svaret er: let test = 8</p>
    </div>
    );
  }

/*navnet er B og det vil bli sent ned til <B />*/
function B() {
    return (
        <div>
        <h2> (Deloppgave B) </h2>
        <p>Hva skriver du dersom du vil gi variabelen text verdien "textverdi"?</p>
        <p>Hvilken datatype er dette?</p>
        <p>svaret er: let test = "textverdi"</p>
    </div>
    );
  }
/*navnet er C og det vil bli sent ned til <C />*/
function C() {
    return (
        <div>
        <h2> (Deloppgave C) </h2>
        <p>Hva skriver du dersom du vil regne ut 2 * 3 ig sette resultatet inn i variabelen produkt?</p>
        <p>svaret er: let text = 2 * 3</p>
    </div>
    );
  }
/*navnet er D og det vil bli sent ned til <D />*/
function D() {
    return (
        <div>
        <h2> (Deloppgave D) </h2>
        <p>Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette resultatet inn i variabelen broej? 
          (Det kan være lurt å unngå skandinaviske bokstaver som æ, ø, å i variabelnavn.)</p>
        <p>svaret er: let broej = 2/3</p>
    </div>
    );
  }
function E() {
  // her er alle oppgavene fra A til D faktisk i kode og ikke i text.
  let OppA = 8;
  let OppB = 'textverdi';
  let OppC = 2 * 3;
  let OppD = 2/3;
// her er consol logene til oppgavene.
  console.log(OppA);
  console.log(OppB);
  console.log(OppC);
  console.log(OppD);
  //her er oppgavene ut på siden og (let) blir sent ut til nettsiden som text.
    return (
        <div>
        <h2>(Deloppgave E)</h2>
        <p>lag et program der du tester om alle kommandoene over fungerer ved å bruke console.log() til å skrive ut innholdet av variablene.</p>
        <p>oppgave A: {OppA}</p>
        <p>oppgave B: {OppB}</p>
        <p>oppgave C: {OppC}</p>
        <p>oppgave D: {OppD}</p>
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
  