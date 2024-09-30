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


export interface User {
    id: string;
    username: string;
}

export interface UserState {
    currentUser: User | null;
    isLoading: boolean;
    error: string | null;
}

export interface RootState {
    questionnaire: QuestionnaireState;
    user: UserState;
}


