import { User } from '@models/User';

class UsersController {
  get (request, response) {
    const user = new User();
    user.email = 'email';
    user.name = 'name';

    return response.json({ data: user });
  }
}

export default new UsersController();
