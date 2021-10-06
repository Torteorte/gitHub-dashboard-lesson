import axios from 'axios';
import { Dispatch } from 'redux';

// const config = {
//   method: 'post',
//   url: `https://django-auth-api.herokuapp.com/user/sign-up/`,
//   body: {
//     username: '',
//     email: '',
//     first_name: '',
//     last_name: '',
//     password: ''
//   }
// };

export const postRegistrationThunk =
  (body: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.post(
      `https://django-auth-api.herokuapp.com/user/sign-up/`,
      body
    );

    console.log(response);
  };
