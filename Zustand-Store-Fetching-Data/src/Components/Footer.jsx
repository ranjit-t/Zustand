import { useCountStore } from "../Zustand/store";

import React from "react";

export default function Footer() {
  const credits = useCountStore((state) => state.credits);
  const count = useCountStore((state) => state.count);

  return (
    <div>
      <p>Count Display from Footer : {count}</p>
      <p>{credits}</p>
    </div>
  );
}
