ReactDOM.render(
    <changeNav />,
    document.getElementById('sidenav')
  );

  function Nav() {
    if (navopen) {
      navbarUpdate;
      return (
        <div>
          <a src="index.html">Home</a><br />
          <a src="#">Javascript</a><br />
          <a src="#">Java</a><br />
          <a src="#">Python</a><br />
          <a src="#">C#/C++/C</a><br />
          <a src="#">Others</a><br />
        </div>
      );
    } else {
      navbarUpdate;
      return;
    }
  }

  function navbarUpdate() {
    ReactDOM.render(
      <Nav />,
      document.getElementById('nav')
    );
  }
  setInterval(navbarUpdate, 1000);