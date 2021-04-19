import { html } from 'orison';

export default context => html`
  <section>
    <p>Ziro is a set of projects that can help build awesome web applications. See them all come together in the <a href="https://ziro-app-example.alexlockhart.me">example app</a>.</p>
    <h3>Ziro Projects</h3>
    <ul class="card-list">
      <li>
        <a href="https://ziro-app.alexlockhart.me">
          <h5>Ziro App</h5>
          <p>A single page progressive web builder toolkit</p>
        </a>
      </li>
      <li>
        <a href="https://ziro-components.alexlockhart.me">
          <h5>Ziro Components</h5>
          <p>A set of web components for making slick user interfaces</p>
        </a>
      </li>
      <li>
        <a href="https://ziro-state.alexlockhart.me">
          <h5>Ziro State</h5>
          <p>A simple state management system</p>
        </a>
      </li>
      <li>
      <a href="https://ziro-state.alexlockhart.me">
        <h5>Ziro CLI</h5>
        <p>A command line tool for the Ziro projects</p>
      </a>
    </li>
    </ul>
  </section>
`;
