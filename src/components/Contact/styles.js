import Styled from 'styled-components';

export const FormWrapper = Styled.form`
    textarea.invalid,
    input[type="text"].invalid, 
    input[type="email"].invalid {
        border: 1px solid red;
    }
    .error {
        color: red;
    }
`;