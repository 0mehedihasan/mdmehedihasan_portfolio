type RuntimeErrorOptions = {
  boundary?: string;
  [key: string]: unknown;
};

type RuntimeEvents = {
  captureException?: (
    error: unknown,
    options?: RuntimeErrorOptions,
    context?: Record<string, unknown>,
  ) => void;
};

declare global {
  interface Window {
    __runtimeEvents?: RuntimeEvents;
    __runtimeReportError?: (payload: {
      error: unknown;
      context?: Record<string, unknown>;
    }) => void;
  }
}

export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.__runtimeEvents?.captureException?.(
    error,
    { boundary: "client" },
    context,
  );

  if (window.__runtimeReportError) {
    window.__runtimeReportError({ error, context });
  }
}
