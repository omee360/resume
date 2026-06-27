"use client";

import { useState } from "react";

export function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Button clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </section>
  );
}
