import PropTypes from 'prop-types';
import { useState, useRef } from "react";
import { nanoid } from 'nanoid'
import { ButtonSubmit, FormContact, FormLabel, FormInput } from "components/ContactForm/ContactForm.styled";

// ================Class====================

// export class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }

//     numberId = nanoid();
//     nameId = nanoid();

//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
        
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '', });
//     };

//     render() {
//         const { name, number } = this.state;
//         return (
//             <FormContact onSubmit={this.handleSubmit}>
//                 <FormLabel htmlFor={this.nameId}>
//                     Name
//                     <FormInput
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.handleChange}
//                         value={name}
//                         id={this.nameId}
//                     />
//                 </FormLabel>
//                 <FormLabel htmlFor={this.numberId}>
//                     Number
//                     <FormInput
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={this.handleChange}
//                         value={number}
//                         id={this.numberId}
//                     />
//                 </FormLabel>
//                 <ButtonSubmit type="submit">Add contact</ButtonSubmit>
//             </FormContact>
//         )

//     }
// }

// ================hooks====================

export const ContactForm = ({onSubmit}) => {
 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const numberId = useRef(nanoid());
    const nameId = useRef(nanoid());


  const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

     const handleSubmit = e => {
         e.preventDefault();
        onSubmit({name, number});
        
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <FormContact onSubmit={handleSubmit}>
                <FormLabel htmlFor={nameId.current}>
                    Name
                    <FormInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        value={name}
                        id={nameId.current}
                    />
                </FormLabel>
                <FormLabel htmlFor={numberId.current}>
                    Number
                    <FormInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        value={number}
                        id={numberId.current}
                    />
                </FormLabel>
                <ButtonSubmit type="submit">Add contact</ButtonSubmit>
            </FormContact>
        )

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}