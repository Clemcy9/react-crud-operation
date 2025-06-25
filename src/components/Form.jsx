import React from "react";

function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="body" name="body" />
        <input type="text" placeholder="userId" name="userId" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
