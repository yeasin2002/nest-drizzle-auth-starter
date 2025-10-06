import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiExtraModels,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

export class ErrorResponseDto {
  message: string;
  statusCode?: number;
  error?: string;
}

export class PaginatedUserDto {
  data: UserResponseDto[];
  total: number;
  page: number;
  limit: number;
}

// --------- Create User docs ---------
export function ApiCreateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new user' }),
    ApiBody({ type: CreateUserDto, description: 'Payload to create a user' }),
    ApiResponse({
      status: 201,
      description: 'User created successfully',
      schema: { $ref: getSchemaPath(UserResponseDto) },
    }),
    ApiResponse({
      status: 400,
      description: 'Validation error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiExtraModels(UserResponseDto, ErrorResponseDto),
  );
}

// --------- Get all users  ---------
export function ApiGetUsersDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get list of users (paginated)' }),
    ApiQuery({
      name: 'page',
      required: false,
      description: 'Page number',
      schema: { type: 'number', example: 1 },
    }),
    ApiQuery({
      name: 'limit',
      required: false,
      description: 'Items per page',
      schema: { type: 'number', example: 20 },
    }),
    ApiResponse({
      status: 200,
      description: 'Paginated list of users',
      schema: { $ref: getSchemaPath(PaginatedUserDto) },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiExtraModels(PaginatedUserDto, UserResponseDto, ErrorResponseDto),
  );
}

// --------- Get single user ---------
export function ApiGetUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get a single user by id' }),
    ApiParam({ name: 'id', required: true, description: 'User id' }),
    ApiResponse({
      status: 200,
      description: 'User found',
      schema: { $ref: getSchemaPath(UserResponseDto) },
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiExtraModels(UserResponseDto, ErrorResponseDto),
  );
}

// --------- Update user ---------
export function ApiUpdateUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update a user' }),
    ApiParam({ name: 'id', required: true, description: 'User id' }),
    ApiBody({ type: UpdateUserDto, description: 'Fields to update' }),
    ApiResponse({
      status: 200,
      description: 'User updated successfully',
      schema: { $ref: getSchemaPath(UserResponseDto) },
    }),
    ApiResponse({
      status: 400,
      description: 'Validation error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiExtraModels(UserResponseDto, UpdateUserDto, ErrorResponseDto),
  );
}

// --------- Delete user ---------
export function ApiDeleteUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a user' }),
    ApiParam({ name: 'id', required: true, description: 'User id' }),
    ApiResponse({
      status: 200,
      description: 'User deleted successfully',
      schema: { type: 'object', properties: { success: { type: 'boolean' } } },
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error',
      schema: { $ref: getSchemaPath(ErrorResponseDto) },
    }),
    ApiExtraModels(ErrorResponseDto),
  );
}
