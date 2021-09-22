import { useState } from "react";

export default function Tab() {
  const [index, setIndex] = useState(1);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <div
            className={`nav-link ${index === 1 ? "active" : ""}`}
            onClick={() => setIndex(1)}
          >
            Tab 1
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${index === 2 && "active"}`}
            onClick={() => setIndex(2)}
          >
            Tab 2
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${index === 3 && "active"}`}
            onClick={() => setIndex(3)}
          >
            Tab 3
          </div>
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab-pane ${index === 1 && "active"}`} role="tabpanel">
          TAB CONTENT 1<p>lorem ipsum d</p>
        </div>
        <div className={`tab-pane ${index === 2 && "active"}`} role="tabpanel">
          TAB CONTENT 2<p>lorem ipsum d</p>
        </div>
        <div className={`tab-pane ${index === 3 && "active"}`} role="tabpanel">
          TAB CONTENT 3
        </div>
      </div>
    </div>
  );
}
