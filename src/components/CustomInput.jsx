function InputText(props) {
    return (
      <>
        <label>
          {props.label}
          <input type="text" id={props.id} value={props.value} onChange={props.onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

function InputTextOpt(props) {
    return (
      <>
        <label>
          {props.label}
          <input type="text" id={props.id} value={props.value} onChange={props.onChange} autoComplete="off" />
        </label>
      </>
    );
  }

  function InputMail(props) {
    return (
      <>
        <label>
          {props.label}
          <input type="email" id={props.id} value={props.value} onChange={props.onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

  function InputNumber(props) {
    return (
      <>
        <label>
          {props.label}
          <input type="number" id={props.id} value={props.value} onChange={props.onChange} autoComplete="on" required />
        </label>
      </>
    );
  }

  function InputDate(props) {
    return (
      <>
        <label>
          {props.label}
          <input type="month" id={props.id} value={props.value} onChange={props.onChange}  />
        </label>
      </>
    );
  }

  function InputArea(props) {
    return (
      <>
        <label>
          {props.label}
          <textarea type="text" id={props.id} value={props.value} onChange={props.onChange} />
        </label>
      </>
    );
  }

export { InputText, InputTextOpt, InputNumber, InputMail, InputDate, InputArea };