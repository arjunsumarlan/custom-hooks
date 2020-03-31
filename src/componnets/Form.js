import React, { useEffect } from "react";

export default props => {
  useEffect(() => {
    return () => {
      console.log("willUnmount terpanggil");
    };
  }, []);

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.name}
        onChange={e => props.onNameChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
