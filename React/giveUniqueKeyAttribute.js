const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
