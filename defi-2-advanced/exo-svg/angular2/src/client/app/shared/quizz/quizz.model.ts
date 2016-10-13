export interface Monkey {
  race: string;
  photo: Photo;
}

export interface Photo {
  url: string;
  attribution: string;
}

export interface Question {
  responses: string[];
}

export interface Answer {
  monkey: Monkey;
}

export interface QuizzAnswers {
  userName: string;
  answers: Answer[];
}

export class QuizzResponses {
  responses: string[] = [];
}

export interface QuizzResult {
  userName: string;
  score: number;
  duration: number;
}

export interface Quizz {
  id: string;
  username: string;
  questions: Question[];
}
