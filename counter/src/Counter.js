function Up() {
  return (
    <button>I'm a up</button>
  );
}
function Down() {
  return (
    <button>I'm a down</button>
  );
}
function Middle() {
  let m = 0 + i++
  return (
    <button>I'm a middle</button>
  );
}
  export default function Counter() {
    var count = 0;
      var button = document.getElementById("myButton");
      var countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
      });
    return (
      <div>
        <h1>Welcome to my app</h1>
        <p><Up /></p>
        <p>{m}</p>
        <p><Middle /></p>
        <p><Down /></p>
      </div>
    );
  }
  