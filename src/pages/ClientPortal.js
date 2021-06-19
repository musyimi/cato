import React, { useEffect } from "react";

function ClientPortal() {
  useEffect(() => {
    window.location.href = "https://client.phpradius.com/login.php?i=6773210/";
  }, []);

  return (
    <div>
      <p>hi there</p>
    </div>
  );
}

export default ClientPortal;
