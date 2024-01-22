interface Todo {
  id: number;
  text: string;
  isFinished: boolean;
}
type TodoFilter = 'all' | 'finished' | 'unfinished';
