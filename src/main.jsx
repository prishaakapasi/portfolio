import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: "2rem",
            background: "#1c4a43",
            color: "#fff",
            fontFamily: "monospace",
          }}
        >
          <h2 style={{ color: "#e8c4b8", marginBottom: "1rem" }}>App Error:</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "#ffd" }}>
            {this.state.error.message}
          </pre>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              color: "#aaa",
              fontSize: "0.8rem",
              marginTop: "1rem",
            }}
          >
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
