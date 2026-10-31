"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [backendMessage, setBackendMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3008/api/home")
      .then((res) => res.text())
      .then(setBackendMessage)
      .catch(() => setBackendMessage("Failed to load backend response"));
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World!</h1>
        <p>{backendMessage}</p>
      </main>
    </div>
  );
}
