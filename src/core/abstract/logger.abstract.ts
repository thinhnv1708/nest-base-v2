export interface DebugLevel {
  FORCE: -1;
  SILENT: 0;
  TINY: 1;
  BASIC: 2;
  DETAIL: 3;
}

export const DEBUG_LEVEL: DebugLevel = {
  FORCE: -1,
  SILENT: 0,
  TINY: 1,
  BASIC: 2,
  DETAIL: 3,
};

export abstract class ILoggerService {
  public DEBUG_LEVEL: DebugLevel;

  abstract error(message: string, context: string, level: number): void;
  abstract warn(message: string, context: string, level: number): void;
  abstract log(message: string, context: string, level: number): void;
  abstract debug(message: string, context: string, level: number): void;
  abstract verbose(message: string, context: string, level: number): void;
}
