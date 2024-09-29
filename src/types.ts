export interface Option {
    label: string;
}

export interface Question {
    id: string;
    title: string;
    subheader: string;
    options: Option[];
    type: 'question';
}

export interface Answer {
    questionId: string;
    selectedOption: string;
}

export interface QuestionnaireState {
    questions: Question[];
    answers: Answer[];
}

export interface QuestionnaireState {
    questions: Question[];
    answers: Answer[];
    isSubmitted: boolean;
    isSubmitting: boolean;
}

