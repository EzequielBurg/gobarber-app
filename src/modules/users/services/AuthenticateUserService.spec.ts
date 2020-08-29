import AppError from '@shared/errors/AppError';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to authenticate a user', async () => {
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'john@doe.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'john@doe.com.br',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with diverages passwords', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'john@doe.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
