export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  example: string;
}
export class DeleteCatDto {}

export class ListAllEntities {
  limit: string;
}
