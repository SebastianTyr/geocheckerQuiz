import { Answers } from "./answers";

export class QuizModel {
    "id": number;
    "text": string;
    "answer_A": string;
    "answer_B": string;
    "answer_C": string;
    "answer_D": string;
    "correct_answer": Answers;
}