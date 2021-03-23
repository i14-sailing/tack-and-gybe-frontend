export type Edge = {
    node: SubmissionNode;
};

export type SubmissionNode = {
    country:
        | 'AUS'
        | 'AUT'
        | 'CAN'
        | 'DEN'
        | 'GBR'
        | 'GER'
        | 'IRL'
        | 'ITA'
        | 'JPN'
        | 'POL'
        | 'SUI'
        | 'SWE'
        | 'USA';
    sailNumber: number;
    boatsName: string;
    tackSubmission: boolean;
    gybeSubmission: boolean;
    tackYoutubeVideoId: string;
    gybeYoutubeVideoId: string;
    tackStartTime: number;
    tackEndTime: number;
    gybeStartTime: number;
    gybeEndTime: number;
};

export type ReducedSubmissionNode = {
    country:
        | 'AUS'
        | 'AUT'
        | 'CAN'
        | 'DEN'
        | 'GBR'
        | 'GER'
        | 'IRL'
        | 'ITA'
        | 'JPN'
        | 'POL'
        | 'SUI'
        | 'SWE'
        | 'USA';
    sailNumber: number;
    boatsName: string;
    youtubeVideoId: string;
    startTime: number;
    endTime: number;
};

export interface RenderSubmissionNode extends ReducedSubmissionNode {
    time: number;
    diff: number;
}

export type QANode = {
    question: string;
    answer: string;
    order: number;
};
