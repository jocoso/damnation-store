import React from "react";

import Navbars from "./components/Navbars/Navbars";

class App extends React.Component { 

  constructor(props) {
    super(props);

    this.state = {
      
    }
  } 

  returnMe = () => {
    return this;
  }

  render() { 
    return (
      <>
        <main>

          {/* Header */}
          <header className="header">
            <Navbars />
          </header>

          {/* CONTENT */}
          <section className="content">
            Content
          </section>

          {/* FOOTER */}
          <footer className="footer">
            Footer
          </footer>

        </main>
      </>
    );
  }
}

export default App;
