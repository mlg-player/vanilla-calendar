import "./style.css";
import { setupCalendar } from "./counter.ts";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
  <h1>Vite + TypeScript</h1>
    <div id="calendar">
  </div>
</div>
`;
setupCalendar(document.querySelector<HTMLDivElement>("#calendar")!);
