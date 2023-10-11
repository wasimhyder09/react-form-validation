import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastNameValue,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmailValue,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredFirstNameHasError || enteredLastNameHasError || enteredEmailHasError) {
      return;
    }

    console.log('Entered First Name ' + enteredFirstNameValue);
    console.log('Entered Last Name ' + enteredLastNameValue);
    console.log('Entered Email ' + enteredEmailValue);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = enteredFirstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = enteredLastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = enteredEmailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstNameValue}
          />
          {enteredFirstNameHasError && (
            <p className='error-text'>First name can't be empty.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastNameValue}
          />
          {enteredLastNameHasError && (
            <p className='error-text'>Last name can't be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='firstName'>Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmailValue}
        />
        {enteredEmailHasError && (
          <p className='error-text'>A valid email must be provided.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
