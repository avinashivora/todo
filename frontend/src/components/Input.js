function Input({ label }) {
    return (
      <div>
        <label>Enter{label}</label>
        <input placeholder={` Enter ${label}`} type="text" />
      </div>
    );
  }
  
  export default Input;