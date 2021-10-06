import * as Yup from 'yup';

export const SignupSchemaRegistration = Yup.object().shape({
  userName: Yup.string().max(150, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').max(254, 'Too Long!'),
  firstName: Yup.string().max(150, 'Too Long!'),
  lastName: Yup.string().max(150, 'Too Long!'),
  password: Yup.string().max(128, 'Too Long!').required('Required')
});
