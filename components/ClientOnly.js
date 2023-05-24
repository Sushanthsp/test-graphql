import React, { useEffect, useState } from "react";

/**
 * ClientOnly is a component that conditionally renders its children only on the client-side.
 * It prevents rendering on the server-side, which can be useful for components that rely on browser-specific APIs.
 */
const ClientOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
