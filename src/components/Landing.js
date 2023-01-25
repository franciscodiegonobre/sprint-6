export default function Landing(props) {
  return (
    <div className="landing-page">
      <div className="container">
        <h2>
          Ja has arribat al teu primer lliurament de React! Una vegada tenint
          els conceptes clars de javascript, veuràs que amb l'ajuda de React,
          podràs fer de manera fàcil i ràpida aplicacions més potents del que
          podíem fer amb Javascript pla
        </h2>
        <button onClick={props.toggle}>Començar</button>
      </div>
    </div>
  );
}
