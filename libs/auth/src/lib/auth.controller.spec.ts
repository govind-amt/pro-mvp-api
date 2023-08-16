import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {LoginDto} from "@pro-fuel-trace-api/data-transfer-object";
import {mockData} from "@pro-fuel-trace-api/mock-data";


describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;
  let response: mockData;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
    controller = module.get(AuthController);
    service = module.get(AuthService);
    response = module.get(mockData);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('should return a 200 OK if the username and password are valid', async () => {
    const loginDto = new LoginDto();
    loginDto.username = 'test_user';
    loginDto.password = 'test_password';

    const token = await controller.login(loginDto);
    expect(token.status).toEqual(response.responseOne.status);

  });
});



