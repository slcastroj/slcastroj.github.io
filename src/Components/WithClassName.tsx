export type WithClassName<T> = { className?: string; } & T;

export type OnlyClassName = WithClassName<{}>;