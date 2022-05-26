//! FormInput component

import './form-input.styles.scss';                                              //? styles sheet

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            {/* {...otherProps} is a spread operator that holds input element's attributes if any */}
            <input className="form-input" {...otherProps}/>
            {/* label && means, if label exists, run below code  */}
            { label && (
                <label 
                    className={`${otherProps.value.length ? 'shrink':null}
                    form-input-label`}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;