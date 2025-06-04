export type OlympicResult = {
    code: string;
    gold: number;
    silver: number;
    bronze:number;
};

export type ApiResponse<T> = {
    data: T | null;
    error: string | null;
  };