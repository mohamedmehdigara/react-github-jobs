import React from 'react';

const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">GitHub Careers</h1>
          <p className="hero-description">
            Come build the home for all developers. Do the best work of your career and join in our mission to accelerate
            human progress by connecting communities all over the world through software collaboration.
          </p>
        </div>
      </section>

      <section className="positions">
        <div className="container">
          <h2 className="section-title">Open positions</h2>
          <ul className="position-list">
            <li>Software Engineer</li>
            <li>Product Manager</li>
            <li>Design Intern</li>
            {/* Add more open positions */}
          </ul>
        </div>
      </section>

      <section className="principles">
        <div className="container">
          <h2 className="section-title">Our Principles</h2>
          <div className="principle">
            <h3 className="principle-title">A diverse and inclusive workplace</h3>
            <p className="principle-description">
              At GitHub, we think that a diverse company is a strong company, and we work hard to foster a supportive and
              welcoming workplace. Learn more about our commitment to diversity.
            </p>
          </div>
          <div className="principle">
            <h3 className="principle-title">Work happier</h3>
            <p className="principle-description">
              Build amazing things with a balance of autonomy and collaborative teamwork. Set your own work schedule and make
              use of a flexible PTO plan when you need to recharge.
            </p>
          </div>
          <div className="principle">
            <h3 className="principle-title">Lead from any location</h3>
            <p className="principle-description">
              GitHub is a remote-first company with offices located throughout the US, Europe, and Asia. Whether you live near
              an office or not, GitHub believes you can do your best work wherever you are. You will receive annual
              reimbursements to outfit your home office and ensure you have what you need so you are set up to do your best work.
            </p>
          </div>
          {/* Add more principles */}
        </div>
      </section>

      {/* Add more sections, such as benefits and hiring locations */}
    </main>
  );
};

export default Main;
