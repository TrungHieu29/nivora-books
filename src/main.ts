import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App element not found');
app.innerHTML = `
  <h1>Nivora-Books</h1>
  <p>Welcome to your new Nivora-Books project!</p>
`;