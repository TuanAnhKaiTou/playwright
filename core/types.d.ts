import { Book } from '@interfaces/Book';
import { User } from '@interfaces/User';

type LoadState = 'load' | 'domcontentloaded' | 'networkidle';
type WaitUntil = LoadState | 'commit';
type Button = 'left' | 'right' | 'middle';
type ModifierActions = 'Alt' | 'Control' | 'Meta' | 'Shift';
type StateOfElement = 'attached' | 'detached' | 'visible' | 'hidden';
type Token = Pick<User, 'token' | 'expires' | 'status' | 'result'>;
type UserResult = Pick<User, 'userID' | 'username' | 'books'>;
type CollectionOfIsbn = Pick<Book, 'isbn'>;
