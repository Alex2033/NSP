import {User} from './user';

export interface CurrentUser extends User {
  qew?: boolean; // Чтобы не было ошибки, это интерфейс на будущее
}
