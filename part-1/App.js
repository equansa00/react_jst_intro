window.App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Your Name" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));