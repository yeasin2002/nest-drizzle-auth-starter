export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// export class PaginatedUserDto {
//   items: UserResponseDto[];
//   totalItems: number;
//   currentPage: number;
//   totalPages: number;
// }
// export class ErrorResponseDto {
//   statusCode: number;
//   message: string;
//   error: string;
// }
