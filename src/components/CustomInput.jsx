function InputText({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <input type="text" id={id} value={value} onChange={onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

function InputTextOpt({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <input type="text" id={id} value={value} onChange={onChange} autoComplete="off" />
        </label>
      </>
    );
  }

  function InputMail({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <input type="email" id={id} value={value} onChange={onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

  function InputNumber({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <input type="number" id={id} value={value} onChange={onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

  function InputDate({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <input type="month" id={id} value={value} onChange={onChange}  />
        </label>
      </>
    );
  }

  function InputArea({ label, id, value, onChange }) {
    return (
      <>
        <label>
          {label}
          <textarea type="text" id={id} value={value} onChange={onChange} />
        </label>
      </>
    );
  }

export { InputText, InputTextOpt, InputNumber, InputMail, InputDate, InputArea };