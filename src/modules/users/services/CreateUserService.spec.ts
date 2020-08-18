// import AppError from '@shared/errors/AppError';
import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    // expect(1 + 2).toBe(3);
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('john@doe.com');
  });

  it('should not be able to create a user with same email from another', async () => {
    // expect(1 + 2).toBe(3);
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'john@doe.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
