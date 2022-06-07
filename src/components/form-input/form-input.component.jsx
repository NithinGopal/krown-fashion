//! FormInput component

//# styles sheet
//import './form-input.styles.jsx';                                              
import { FormInputLabel, Input, Group} from './form-input.styles'               //? stylised component

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            {/* //$ {...otherProps} is a spread operator that holds input element's attributes if any */}
            <Input {...otherProps}/>
            {/* //$ label && means, if label exists, run below code  */}
            { label && (
                <FormInputLabel 
                    shrink={otherProps.value.length}
                    // className={`${otherProps.value.length ? 'shrink':null}
                    // form-input-label`}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;